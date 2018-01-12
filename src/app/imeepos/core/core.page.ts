import {
    NgModule,
    Component,
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    OnChanges,
    SimpleChanges,
    OnDestroy,
    DoCheck,
    AfterViewChecked,
    AfterViewInit,
    Input,
    Output,
    EventEmitter,
    ViewChild,
    ViewChildren,
    ContentChild,
    ContentChildren,
    ElementRef,
    ChangeDetectionStrategy
} from '@angular/core';

export class CorePage implements OnInit, AfterContentInit, AfterContentChecked, OnChanges, OnDestroy, DoCheck, AfterViewChecked, AfterViewInit {
    constructor(
        private __pageName: string
    ) {
        console.log(`${this.__pageName}.constructor`);
    }
    // 1
    ngOnInit() {
        console.log(`${this.__pageName}.ngOnInit`);
    }
    // 2
    ngDoCheck() {
        console.log(`${this.__pageName}.ngDoCheck`);
    }
    // 3
    ngAfterContentInit() {
        console.log(`${this.__pageName}.ngAfterContentInit`);
    }
    // ngAfterContentChecked后属性值不能改变
    ngAfterContentChecked() {
        console.log(`${this.__pageName}.ngAfterContentChecked`);
    }
    // 5
    ngAfterViewInit() {
        console.log(`${this.__pageName}.ngAfterViewInit`);
    }
    // 6
    ngAfterViewChecked() {
        console.log(`${this.__pageName}.ngAfterViewChecked`);
    }
    // 7
    ngOnChanges(changes: SimpleChanges) {
        console.log(`${this.__pageName}.ngOnChanges`);
    }
    // 8
    ngOnDestroy() {
        console.log(`${this.__pageName}.ngOnDestroy`);
    }
}
