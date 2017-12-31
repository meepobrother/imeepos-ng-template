import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberTrackerComponent } from './example/number-tracker';
@NgModule({
    declarations: [
        NumberTrackerComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        NumberTrackerComponent
    ],
    providers: [],
})
export class RxjsModule { }

