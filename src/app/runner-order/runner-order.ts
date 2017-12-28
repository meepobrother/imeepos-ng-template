
import {
    Component, OnInit,
    ChangeDetectionStrategy, ChangeDetectorRef,
    ViewEncapsulation
} from '@angular/core';
import { RunnerOrderService, Widget } from '../service/order';
import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'runner-order',
    templateUrl: 'runner-order.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class RunnerOrderComponent implements OnInit {
    total$: Subject<number> = new Subject();
    constructor(
        public order: RunnerOrderService
    ) {
        this.total$.next(0);
        this.order.order$.subscribe(res => {
            let price = 0;
            res.map((item: Widget) => {
                if (item.money) {
                    price += item.money * 1;
                } else {
                    price += item.num * item.price;
                }
                this.total$.next(price);
            });
        });
    }

    ngOnInit() {

    }
}
