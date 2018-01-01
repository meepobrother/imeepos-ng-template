import { Component, OnInit } from '@angular/core';
import { MeepoAdv } from '../../metadata';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
@Component({
    selector: 'test-adv',
    templateUrl: './test-adv.html'
})
export class TestAdvComponent implements MeepoAdv {

    items: any[] = [];

    onAddItem: Subject<any> = new Subject();
    onRemoveItem: Subject<any> = new Subject();
    constructor() { }

    ngOnInit() { }

    meepoOnAddItem(e: any): Observable<any> {
        this.items.push(e);
        this.onAddItem.next(e);
        return this.onAddItem.asObservable();
    }

    meepoOnRemoveItem(e: any): Observable<any> {
        let index = this.items.indexOf(e);
        return this.onRemoveItem.asObservable();
    }
}