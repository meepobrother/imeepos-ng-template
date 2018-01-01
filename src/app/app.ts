import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeepoFormsModule } from 'meepo-forms';
import { RepairIndexComponent } from './repair-index/repair-index';
import { CarEditorComponent } from './car-editor/car-editor';

@NgModule({
    declarations: [
        RepairIndexComponent,
        CarEditorComponent
    ],
    imports: [
        CommonModule,
        MeepoFormsModule
    ],
    exports: [
        RepairIndexComponent,
        CarEditorComponent
    ],
    providers: [],
})
export class RepairModule { }

