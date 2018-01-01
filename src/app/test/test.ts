import { Component, OnInit } from '@angular/core';
import { MeepoListBase } from '../base/meepo-list';
@Component({
    selector: 'test',
    templateUrl: './test.html'
})
export class TestComponent extends MeepoListBase {
    constructor() { 
        super();
    }
    ngOnInit() { 
        console.log(this);
        this.meepoOnSearch({id: '1',key: '22'});
    }
}