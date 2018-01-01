import { Output, Input, EventEmitter } from '@angular/core';
import { Meepo } from './meepo';
import { Observable } from 'rxjs/Observable';
export abstract class MeepoHome extends Meepo {
    @Output() onItem: EventEmitter<any> = new EventEmitter();
    constructor() {
        super();
    }
    // 添加项目
    abstract addItem(item: any): Observable<any>;
    // 移除项目
    abstract removeItem(item: any): Observable<any>;
}