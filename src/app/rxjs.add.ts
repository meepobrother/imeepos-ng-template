
/**
 * 组合
 */
// 当源 observable 完成时，对收集的 observables 使用 combineLatest 。
import 'rxjs/add/operator/combineAll';
// 当任意 observable 发出值时，发出每个 observable 的最新值。
import 'rxjs/add/operator/combineLatest';
// 按照顺序，前一个 observable 完成了再订阅下一个 observable 并发出值。
import 'rxjs/add/operator/concat';
// 收集 observables，当前一个完成时订阅下一个。
import 'rxjs/add/operator/concatAll';
// 收集并订阅所有的 observables 。
import 'rxjs/add/operator/mergeAll';
// 将前一个值和当前值作为数组发出
import 'rxjs/add/operator/pairwise';
// 使用首先发出值的 observable 。
import 'rxjs/add/operator/race';
// 发出给定的第一个值
import 'rxjs/add/operator/startWith';
// 还提供另一个 observable 的最新值。
import 'rxjs/add/operator/withLatestFrom';
// 在所有 observables 发出后，将它们的值作为数组发出
import 'rxjs/add/operator/zip';


/**
 * 条件
 */
// 如果在完成前没有发出任何通知，那么发出给定的值
import 'rxjs/add/operator/defaultIfEmpty';
// 如果完成时所有的值都能通过断言，那么发出 true，否则发出 false 。
import 'rxjs/add/operator/every';

/**
 * catch
 */
// 优雅地处理 observable 序列中的错误
import 'rxjs/add/operator/catch';
// 如果发生错误，以指定次数重试 observable 序列。
import 'rxjs/add/operator/retry';
// 当发生错误时，基于自定义的标准来重试 observable 序列
import 'rxjs/add/operator/retryWhen';

/**
 * 多播
 */
// 共享源 observable 并通过调用 connect 方法使其变成热的。
import 'rxjs/add/operator/publish';
// 使用提供 的 Subject 来共享源 observable
import 'rxjs/add/operator/multicast';
// 在多个订阅者间共享源 observable 。
import 'rxjs/add/operator/share';


/**
 * 过滤
 */
// 根据一个选择器函数，舍弃掉在两次输出之间小于指定时间的发出值。
import 'rxjs/add/operator/debounce';
// 舍弃掉在两次输出之间小于指定时间的发出值
import 'rxjs/add/operator/debounceTime';
// 只有当当前值与之前最后一个值不同时才将其发出。
import 'rxjs/add/operator/distinctUntilChanged';
// 发出符合给定条件的值。
import 'rxjs/add/operator/filter';
// 发出第一个值或第一个通过给定表达式的值。
import 'rxjs/add/operator/first';
// 忽略所有通知，除了 complete 和 error 。
import 'rxjs/add/operator/ignoreElements';
// 根据提供的表达式，在源 observable 完成时发出它的最后一个值。
import 'rxjs/add/operator/last';
// 当提供的 observable 发出时从源 observable 中取样。
import 'rxjs/add/operator/sample';
// 发出通过表达式的单一项。
import 'rxjs/add/operator/single';
// 跳过N个(由参数提供)发出值
import 'rxjs/add/operator/skip';
// 跳过源 observable 发出的值，直到提供的 observable 发出值。
import 'rxjs/add/operator/skipUntil';
// 跳过源 observable 发出的值，直到提供的表达式结果为 false 。
import 'rxjs/add/operator/skipWhile';
// 在完成前发出N个值(N由参数决定)。
import 'rxjs/add/operator/take';
// 发出值，直到提供的 observable 发出值，它便完成。
import 'rxjs/add/operator/takeUntil';
// 发出值，直到提供的表达式结果为 false 。
import 'rxjs/add/operator/takeWhile';

// 仅当由提供的函数所确定的持续时间已经过去时才发出值。
import 'rxjs/add/operator/throttle';
// 当指定的持续时间经过后发出最新值。
import 'rxjs/add/operator/throttleTime';

/**
 * 转换
 */
// 收集输出值，直到提供的 observable 发出才将收集到的值作为数组发出
import 'rxjs/add/operator/buffer';
// 收集发出的值，直到收集完提供的数量的值才将其作为数组发出
import 'rxjs/add/operator/bufferCount';
// 收集发出的值，直到经过了提供的时间才将其作为数组发出
import 'rxjs/add/operator/bufferTime';
// 开启开关以捕获源 observable 所发出的值，关闭开关以将缓冲的值作为数组发出
import 'rxjs/add/operator/bufferToggle';
// 收集值，直到关闭选择器发出值才发出缓冲的值。
import 'rxjs/add/operator/bufferToggle';
// 将值映射成内部 observable，并按顺序订阅和发出。
import 'rxjs/add/operator/concatMap';
// 当前一个 observable 完成时订阅提供的 observable 并发出值。
import 'rxjs/add/operator/concatMapTo';
// 映射成内部 observable，忽略其他值直到该 observable 完成。
import 'rxjs/add/operator/exhaustMap';
// 递归调用提供的函数
import 'rxjs/add/operator/expand';
// 基于提供的值分组成多个 observables
import 'rxjs/add/operator/groupBy';
// 对源 observable 的每个值应用投射函数。
import 'rxjs/add/operator/map';
// 将每个发出值映射成常量
import 'rxjs/add/operator/mapTo';
// 映射成 observable 并发出值
import 'rxjs/add/operator/mergeMap';
// partition
import 'rxjs/add/operator/partition';
// 选择属性来发出。
import 'rxjs/add/operator/pluck';
// 将源 observalbe 的值归并为单个值，当源 observable 完成时将这个值发出。
import 'rxjs/add/operator/reduce';
// 随着时间的推移进行归并。
import 'rxjs/add/operator/scan';
// 映射成 observable，完成前一个内部 observable，发出值
import "rxjs/add/operator/switchMap";
// 时间窗口值的 observable 。
import "rxjs/add/operator/window";
// 源 observable 中的值的 observable，每次发出N个值(N由参数决定)。
import "rxjs/add/operator/windowCount";
// 在每个提供的时间跨度内，收集源 obsercvable 中的值的 observable 。
import "rxjs/add/operator/windowTime";
// 以 openings 发出为起始，以 closingSelector 发出为结束，收集并发出源 observable 中的值的 observable 。
import "rxjs/add/operator/windowToggle";
// 在提供的时间帧处关闭窗口，并发出从源 observable 中收集的值的 observable 。
import "rxjs/add/operator/windowWhen";

/**
 * 工具 
 */
// 透明地执行操作或副作用，比如打印日志。
import 'rxjs/add/operator/do';
// 根据给定时间延迟发出值
import 'rxjs/add/operator/delay';
// 延迟发出值，延迟时间由提供函数决定
import 'rxjs/add/operator/delayWhen';
// 发出值，直到提供的表达式结果为 false 
import 'rxjs/add/operator/takeWhile';
// 让我拥有完整的 observable 
import 'rxjs/add/operator/let';
// 将 observable 转换成 promise
import 'rxjs/add/operator/toPromise';


