import { timer, interval } from '../rxjs.observable';
import "../rxjs.add";

// 将每个发出值映射成常量。
let source = interval(2000);
// 将每个发出值映射成字符串
const example = source.mapTo('HELLO WORLD!');
const subscribe = example.subscribe(val => console.log(val));
