import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeepoFormsModule } from 'meepo-forms';
import { XscrollModule } from 'meepo-xscroll';

import { RepairIndexComponent } from './repair-index/repair-index';
import { CarEditorComponent } from './car-editor/car-editor';
import { CarListComponent } from './car-list/car-list';

@NgModule({
    declarations: [
        RepairIndexComponent,
        CarEditorComponent,
        CarListComponent
    ],
    imports: [
        CommonModule,
        MeepoFormsModule,
        XscrollModule
    ],
    exports: [
        RepairIndexComponent,
        CarEditorComponent,
        CarListComponent
    ],
    providers: [],
})
export class RepairModule { }

