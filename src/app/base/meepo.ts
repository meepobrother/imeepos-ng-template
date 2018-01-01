import { OnDestroy } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { StoreService } from 'meepo-store';
export class Meepo implements BaseInter {
    observers: any[] = [];
    constructor() { }
    ngOnInit() { }
    ngOnDestroy() {
        this.observers.map((res: any) => {
            res.unsubscribe();
        });
    }
}

export interface BaseInter extends OnDestroy {
    observers: any[];
}
