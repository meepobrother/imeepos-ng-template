import { Injectable } from '@angular/core';

@Injectable()
export class RunnerUtilService {

    constructor() { }
    // 区间
    qujian() {

    }
    // 阶梯
    jieti(settingItems: any[], len: number) {
        let items: any = [];
        settingItems.map(res => {
            if (res.end > 0 && len > res.start && len <= res.end) {
                res['chazhi'] = len - res.start;
                if (res['chazhi'] > 0) {
                    items.push({
                        start: res.start,
                        end: len,
                        price: res.price,
                        money: Number(res['chazhi'] * res.price).toFixed(2)
                    });
                }
            } else if (res.end > 0 && len > res.start && len > res.end) {
                res['chazhi'] = res.end - res.start;
                if (res['chazhi'] > 0) {
                    items.push({
                        start: res.start,
                        end: res.end,
                        price: res.price,
                        money: Number(res['chazhi'] * res.price).toFixed(2)
                    });
                }
            } else if (!res.end && res.start > 0 && len > res.start) {
                res['chazhi'] = len - res.start;
                if (res['chazhi'] > 0) {
                    items.push({
                        start: res.start,
                        end: len,
                        price: res.price,
                        money: Number(res['chazhi'] * res.price).toFixed(2)
                    });
                }
            }
        });
        return items;
    }
    // 公式
    xcode() { }
    // 后付费
    back() { }
}