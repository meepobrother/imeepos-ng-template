import {
    Input, ChangeDetectorRef,
    OnInit, OnDestroy
} from '@angular/core';
import { Meepo, BaseInter } from './meepo';
import { Subject } from "rxjs/Subject";
import { StoreService } from 'meepo-store';
import { Title } from '@angular/platform-browser';

export class MeepoCache extends Meepo implements DetailInter, BaseInter {
    key: string;
    data: any = {};

    onUpdate: Subject<any> = new Subject();
    observers: any[] = [];

    store: StoreService;
    cd: ChangeDetectorRef;
    title: Title;
    constructor(
        store: StoreService,
        cd: ChangeDetectorRef,
        title: Title
    ) {
        super();
        this.store = store;
        this.cd = cd;
        let observer = this.onUpdate.subscribe(res => {
            this.data = res;
            if(this.data['title']){
                this.title.setTitle(this.data['title']);
            }
            this.cd.markForCheck();
        });
        this.observers.push(observer);
    }
    ngOnInit() {
        let data = this.store.get(`${this.key}`, this.data);
        if (data) {
            this.data = data;
            if(this.data['title']){
                this.title.setTitle(this.data['title']);
            }
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
