import { Component, OnInit } from '@angular/core';
import { CorePage } from '../core.page';
@Component({
    selector: 'body',
    templateUrl: './root.html'
})
export class ImeeposRootPage extends CorePage {
    constructor() { 
        super('ImeeposRootPage');
    }
}