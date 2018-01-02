import {
    Input, ChangeDetectorRef,
    OnInit, OnDestroy
} from '@angular/core';
import { Meepo, BaseInter } from './meepo';
import { Subject } from "rxjs/Subject";
import { StoreService } from 'meepo-store';
export class MeepoCache extends Meepo implements DetailInter, BaseInter {
    key: string;
    data: any = {};

    onUpdate: Subject<any> = new Subject();
    observers: any[] = [];

    store: StoreService;
    cd: ChangeDetectorRef;
    constructor(
        store: StoreService,
        cd: ChangeDetectorRef
    ) {
        super();
        this.store = store;
        this.cd = cd;
        let observer = this.onUpdate.subscribe(res => {
            this.data = res;
            this.cd.markForCheck();
        });
        this.observers.push(observer);
    }
    ngOnInit() {
        let data = this.store.get(`${this.key}`, this.data);
        if (data) {
            this.data = data;
        }
        this.meepoInit();
    }
    meepoInit() { }
    updateCache(data: any) {
        if (data === this.data) { } else {
            this.store.set(`${this.key}`, data);
            this.onUpdate.next(data);
        }
    }
}

export interface DetailInter extends OnInit, OnDestroy {
    key: string;
    data: any;
    onUpdate: Subject<any>;
    meepoInit(): void;
    updateCache(data: any): void;
}
