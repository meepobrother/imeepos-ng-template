// 给定持续时间后，再按照指定间隔时间依次发出数字。
export { timer } from 'rxjs/observable/timer';
// 基于给定时间间隔发出数字序列。
export { interval } from 'rxjs/observable/interval';
// 将数组、promise 或迭代器转换成 observable 。
export { from } from 'rxjs/observable/from';
// 将事件转换成 observable 序列。
import { fromEvent } from 'rxjs/observable/fromEvent';
// 创建由 promise 转换而来的 observable，并发出 promise 的结果。
import { fromPromise } from 'rxjs/observable/fromPromise';
// 按顺序发出任意数量的值。
import { of } from 'rxjs/observable/of';
// 依次发出给定区间内的数字。
import { range } from 'rxjs/observable/range';
// 在订阅上发出错误
import { _throw } from 'rxjs/observable/throw';
// 立即完成的 observable 。
import { empty } from 'rxjs/observable/empty';

// 当所有 observables 完成时，发出每个 observable 的最新值。
import { forkJoin } from 'rxjs/observable/forkJoin';
// 将多个 observables 转换成单个 observable 。
import { merge } from 'rxjs/observable/merge';






