

import { timer, interval } from '../rxjs.observable';
import "../rxjs.add";

// 立即发出值， 然后每5秒发出值
const source = timer(0, 500);
// 当 source 发出值时切换到新的内部 observable，发出新的内部 observable 所发出的值
const example = source.switchMap((res) => {
    console.log(res);
    return interval(300);
});
// 输出: 0,1,2,3,4,5,6,7,8,9...0,1,2,3,4,5,6,7,8
const subscribe = example.subscribe(val => console.log(val));
