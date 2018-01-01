import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test';
import { TestAdvComponent } from './test/test-adv/test-adv'
@NgModule({
    declarations: [
        TestComponent,
        TestAdvComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TestComponent,
        TestAdvComponent
    ],
    providers: [],
})
export class BaseModule { }
export { TestAdvComponent } from './test/test-adv/test-adv'

