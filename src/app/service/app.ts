import { Injectable } from '@angular/core';
import { CoreService } from 'meepo-core';
import { AxiosService } from 'meepo-axios';
import { Subject } from 'rxjs/Subject';
import { RunnerOrderService, Widget } from './order';
import { RunnerUtilService } from './util';
@Injectable()
export class RunnerAppService {
    items: any[] = [];
    active$: Subject<any> = new Subject();
    inited$: Subject<any> = new Subject();
    setting: any;
    setting$: Subject<any> = new Subject();
    price: any;
    price$: Subject<any> = new Subject();
    constructor(
        public core: CoreService,
        public axios: AxiosService,
        public order: RunnerOrderService,
        public util: RunnerUtilService
    ) {
        this.active$.subscribe(res => {
            this.setting$.next(res.setting);
        });
        this.setting$.subscribe(res => {
            this.price$.next(res.setting);
            this.setting = res;
        });
        this.price$.subscribe(res => {
            // 设置起步价
            this.price = res;
            console.log(this.price);
            let { len, start, duration } = res;
            let total = new Widget('total', '起步价');
            total.unit = '';
            total.num = len;
            total.price = 1;
            total.desc = `含${len}公里`;
            this.order.total$.next(total);
        });
    }

    init() {
        let url = this.core.murl('entry//open', { __do: 'v2setting.tasksClass', m: 'imeepos_runner' }, false);
        this.axios.bpost(url, {}).subscribe((res: ReturnWidget) => {
            this.items = res.info;
            let hasActive = false;
            this.items.map(item => {
                if (item.active) {
                    this.setActive(item);
                    hasActive = true;
                }
            });
            if (!hasActive) {
                if (this.items && this.items.length > 0) {
                    this.setActive(this.items[0]);
                }
            }
            this.inited$.next(this.items);
        });
    }

    setActive(item: any) {
        item.active = true;
        this.active$.next(item);
    }

    setWeight(val: number) {
        let { weight } = this.setting;
        weight = weight || { title: '重量' }
        let weight$ = new Widget('weight', weight.title, '公斤', val, 0, '');
        weight$.items = this.util.jieti(this.price.weightItems, val);
        weight$.desc = `${val}${weight$.unit}内免费`;
        if (weight$.items.length > 0) {
            let str = '';
            weight$.items.map((i: any) => {
                str += `${i.start}-${i.end}${weight$.unit}${i.money}元`;
                weight$.money += i.money;
            });
            weight$.desc = str;
        }
        this.order.weight$.next(weight$);
    }

    setJifei(e: any) {

    }
}

export interface ReturnWidget {
    code: number;
    info: any;
    msg: string;
}
