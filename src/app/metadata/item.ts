import { Observable } from 'rxjs/Observable';
// 添加项目
export interface OnAddItem {
    onAddItem<T>(e: T): Observable<T>;
    addItem<T>(e: T): void;
}
// 移除项目
export interface onRemoveItem {
    onRemoveItem<T>(e: T): Observable<T>;
    removeItem<T>(e: T): void;
}
// 点击项目
export interface onItem {
    onItem<T>(e: T): Observable<T>;
 }