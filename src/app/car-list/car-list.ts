import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'car-list',
    templateUrl: './car-list.html',
    styleUrls: ['./car-list.scss']
})
export class CarListComponent implements OnInit {
    my: boolean = true;
    @Input() items: any[] = [{
        id: '1',
        carNum: '1334455',
        jarNum: '33333ffd',
        licheng: '500',
        images: [],
        realname: '杨明明',
        mobile: '13140415408',
        desc: '汽车备注',
        title: '大众S1'
    }, {
        id: '2',
        carNum: '1334455',
        jarNum: '33333ffd',
        licheng: '300',
        images: [],
        realname: '杨明明',
        mobile: '13140415408',
        desc: '汽车备注',
        title: '宝马3系'
    }];
    constructor() { }

    ngOnInit() { }

    myCar() {
        this.my = true;
    }

    myCreate() {
        this.my = false;
    }

    editor(item: any) {

    }
}