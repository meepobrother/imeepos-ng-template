import {
    Input
} from '@angular/core';

export class Meepo {
    // 组件自定义参数
    @Input() widget: any;
    @Input() uuid: string;

    error(e: any) {
        console.log(e);
    }
}
