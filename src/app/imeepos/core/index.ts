import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ImeeposRootPage } from './root/root';
import { ImeeposEmptyPage } from './empty/empty';
@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([{
            path: "**",
            component: ImeeposEmptyPage
        }], {
            useHash: true
        })
    ],
    declarations: [
        ImeeposRootPage,
        ImeeposEmptyPage
    ]
})
export class ImeeposCoreModule {
    constructor( @Optional() @SkipSelf() parentModule: ImeeposCoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the main.ts only');
        }
    }
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: ImeeposCoreModule
        }
    }
}
export { CorePage } from './core.page';
export { ImeeposRootPage } from './root/root';



