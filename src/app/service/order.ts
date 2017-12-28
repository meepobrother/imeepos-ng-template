import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';

import { CoreService } from 'meepo-core';
import { AxiosService } from 'meepo-axios';
import { UuidService } from 'meepo-uuid';

@Injectable()
export class RunnerOrderService {
    // 总价
    total: number = 0;
    // 处理结果
    order$: Subject<any> = new Subject();

    // 起步价
    total$: Subject<any> = new Subject();
    // 距离
    juli$: Subject<Widget> = new Subject();
    // 起点
    startAddress$: Subject<AddressWidget> = new Subject();
    // 终点
    endAddress$: Subject<AddressWidget> = new Subject();

    // 时间
    time$: Subject<Widget> = new Subject();
    // 开始时间
    startTime$: Subject<any> = new Subject();
    // 结束时间
    endTime$: Subject<any> = new Subject();

    // 重量
    weight$: Subject<Widget> = new Subject();
    // 体积
    tiji$: Subject<Widget> = new Subject();
    width$: Subject<any> = new Subject();
    height$: Subject<any> = new Subject();
    length$: Subject<any> = new Subject();
    // 价格
    money$: Subject<Widget> = new Subject();
    // 小费
    fee$: Subject<Widget> = new Subject();
    // 商品
    goods$: Subject<Widget> = new Subject();

    sn: string = this.uuid.v1();
    constructor(
        public core: CoreService,
        public axios: AxiosService,
        public uuid: UuidService
    ) {
        this.total$.asObservable().combineLatest(
            this.juli$.asObservable(),
            this.time$.asObservable(),
            this.weight$.asObservable(),
            this.tiji$.asObservable(),
            this.money$.asObservable(),
            this.fee$.asObservable(),
            this.goods$.asObservable()
        ).subscribe(res => {
            this.order$.next(res);
        });

        let total = new Widget('total', '总价');
        total.unit = '';
        this.total$.next(total);
        // 初始距离
        let juli = new Widget();
        this.juli$.next(juli);
        // 时间
        let time = new Widget('time', '时间');
        this.time$.next(time);
        // 重量
        let weight = new Widget('weight', '重量');
        this.weight$.next(weight);
        // 体积
        let tiji = new Widget('tiji', '体积');
        this.tiji$.next(tiji);
        // 价格
        let money = new Widget('money', '物品价格');
        this.money$.next(money);
        // 小费加急
        let fee = new Widget('fee', '小费');
        this.fee$.next(fee);
        let goods = new Widget('goods', '商品');
        goods.unit = '个';
        this.goods$.next(goods);

        console.log('runner order service sn is', this.sn);
    }

    addWeight(val: number = 0, price: number = 0) {
        let weight = new Widget('weight', '重量');
        weight.unit = '公斤';
        weight.price = price;
        weight.num = val;
        this.weight$.next(weight);
    }

    init() {

    }

}

export class AddressWidget {
    point: any;
    address: string;
    city: string;
    title: string;
    detail: string;
    mobile: string;
}

export class Widget {
    money: number = 0;
    needPay: boolean = true;
    isAdd: boolean = true;
    icon: string;
    image: string;
    items: GoodWidget[] = [];
    constructor(
        public name: string = 'juli',
        public title: string = '路程',
        public unit: string = '公里',
        public num: number = 0,
        public price: number = 0,
        public desc: string = ''
    ) { }
}

export class GoodWidget {
    title: string;
    price: number = 0;
    num: number = 0;
    desc: string;
    image: string;
}