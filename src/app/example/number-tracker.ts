import { Component, OnDestroy, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { timer, interval } from '../rxjs.observable';
import "../rxjs.add";

@Component({
    selector: 'number-tracker',
    template: `
      <h3> {{ currentNumber }}</h3>
    `
})
export class NumberTrackerComponent implements OnDestroy {
    @Input()
    set end(endRange: number) {
        this._counterSub$.next(endRange);
    }
    public currentNumber = 0;
    private _counterSub$ = new Subject();
    private _subscription: Subscription;

    constructor() {
        this._subscription = this._counterSub$
            .switchMap(endRange => {
                return timer(0, 20)
                    // 将每个发出值映射成常量。
                    .mapTo(this.positiveOrNegative(endRange, this.currentNumber))
                    .startWith(this.currentNumber)
                    .scan((acc, curr) => acc + curr)
                    .delayWhen((i: any) => {
                        // 这里实现缓动效果
                        return timer(i * 10);
                    })
                    .takeWhile(this.takeUntilFunc(endRange, this.currentNumber));
            })
            .subscribe(val => this.currentNumber = val);
    }

    private positiveOrNegative(endRange, currentNumber) {
        return endRange > currentNumber ? 1 : -1;
    }

    private takeUntilFunc(endRange, currentNumber) {
        return endRange > currentNumber
            ? val => val <= endRange
            : val => val >= endRange;
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
}