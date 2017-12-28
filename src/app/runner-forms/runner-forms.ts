import {
    Component, OnInit, ViewChild, ElementRef,
    ChangeDetectionStrategy, ChangeDetectorRef,
    ViewEncapsulation
} from '@angular/core';
import { RunnerOrderService, Widget } from '../service/order';
import { RunnerAppService } from '../service/app';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'runner-forms',
    templateUrl: './runner-forms.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class RunnerFormsComponent implements OnInit {
    items$: Observable<any>;
    constructor(
        public order: RunnerOrderService,
        public app: RunnerAppService,
        public cd: ChangeDetectorRef
    ) {
        // 处理得到新流
        this.items$ = this.app.inited$.map(items => {
            items.map(item=>{
                item.value = item.code
            });
            return items;
        });
    }

    ngOnInit() { 
    }

    changeWeight(e: any) {
        this.app.setWeight(e);
    }

    changeClass(e: any) {
        this.app.setActive(e);
    }

    changeJifei(e: any) {
        this.app.setJifei(e);
    }
}