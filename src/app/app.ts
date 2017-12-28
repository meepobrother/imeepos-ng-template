import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RunnerAppService } from './service/app';
import { RunnerOrderService } from './service/order';
import { RunnerPayService } from './service/pay';
import { RunnerUtilService } from './service/util';


import { RunnerOrderComponent } from './runner-order/runner-order';
import { RunnerFormsComponent } from './runner-forms/runner-forms';

import { MeepoCoreServiceModule } from 'meepo-core';
import { AxiosModule } from 'meepo-axios';
import { MeepoFormsModule } from 'meepo-forms';
import { UuidModule } from 'meepo-uuid';

import "rxjs/add/operator/combineLatest";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";

@NgModule({
    declarations: [
        RunnerOrderComponent,
        RunnerFormsComponent
    ],
    imports: [
        CommonModule, MeepoCoreServiceModule, AxiosModule,
        MeepoFormsModule, UuidModule
    ],
    exports: [
        RunnerOrderComponent,
        RunnerFormsComponent
    ],
    providers: [
        RunnerAppService,
        RunnerOrderService,
        RunnerPayService,
        RunnerUtilService
    ],
})
export class RunnerModule { }

export { RunnerAppService } from './service/app';
export { RunnerOrderService } from './service/order';
export { RunnerPayService } from './service/pay';
export { RunnerUtilService } from './service/util';

