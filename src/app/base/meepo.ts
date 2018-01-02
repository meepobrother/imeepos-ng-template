import { OnDestroy } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { StoreService } from 'meepo-store';
export class Meepo implements BaseInter {
    observers: any[] = [];

    private _win: Window;
    _isPortrait: boolean = false;
    _width: number = 0;
    _height: number = 0;

    constructor() { }

    ngOnInit() {
        this._calcDim();
    }

    public _calcDim() {
        this._win = window;
        let win = this._win;
        let innerWidth = win['innerWidth'];
        let innerHeight = win['innerHeight'];
        if (win.screen.width > 0 && win.screen.height > 0) {
            if (innerWidth < innerHeight) {
                if (this._width <= innerWidth) {
                    this._isPortrait = true;
                    this._width = innerWidth;
                }
                if (this._height <= innerHeight) {
                    this._isPortrait = true;
                    this._height = innerHeight;
                }
            } else {
                if (this._width !== innerWidth) {
                    this._isPortrait = false;
                    this._width = innerWidth;
                }
                if (this._height !== innerHeight) {
                    this._isPortrait = false;
                    this._height = innerHeight;
                }
            }
        }
    }
    ngOnDestroy() {
        this.observers.map((res: any) => {
            res.unsubscribe();
        });
    }
}

export interface BaseInter extends OnDestroy {
    observers: any[];
}
