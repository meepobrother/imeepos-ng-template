import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeaderContainerComponent } from './header-container/header-container';
let routes: Routes = [];
import { IconsModule } from 'meepo-icons';
import { EventModule } from 'meepo-event';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        IconsModule,
        EventModule.forRoot()
    ],
    exports: [
        HeaderContainerComponent
    ],
    declarations: [
        HeaderContainerComponent
    ],
    providers: [
    ],
})
export class HeaderModule { }
