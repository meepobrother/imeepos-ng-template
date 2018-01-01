import { Input } from '@angular/core';
import { Meepo } from './meepo';
import { MeepoList } from '../metadata/meepo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
export class MeepoListBase extends Meepo implements MeepoList {

    page: number = 1;
    psize: number = 10;

    constructor() {
        super();
    }
    // 加载数据
    meepoOnLoad(): Observable<any> {
        return Observable.empty();
    }
    // 搜索数据
    meepoOnSearch(params: { [propName: string]: string }): Observable<any> {
        return Observable.empty();
    }
    // 加载数据
    meepoloadMore(e: any): Observable<any> {
        return Observable.empty();
    }
    // 刷新数据
    meepoOnRefresh(e: any): Observable<any> {
        return Observable.empty();
    }
}