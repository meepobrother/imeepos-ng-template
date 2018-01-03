import { NgModule, ModuleWithProviders } from '@angular/core';
import { EventModule } from 'meepo-event';
import { MeepoCoreServiceModule } from 'meepo-core';
import { PermissionsModule } from 'meepo-permissions';
import { IconsModule } from 'meepo-icons';
import { CommonModule } from '@angular/common';
import { StoreModule } from 'meepo-store';
import { FooterComponent, FOOTER_CONFIG, FooterConfigDefault } from './footer/footer';
import { AxiosModule } from 'meepo-axios';

@NgModule({
    imports: [
        EventModule.forRoot(),
        PermissionsModule.forRoot({
            items: ['admin']
        }),
        IconsModule,
        CommonModule,
        StoreModule,
        AxiosModule
    ],
    exports: [
        FooterComponent
    ],
    declarations: [
        FooterComponent
    ],
    providers: [
    ],
})
export class FooterModule {
    public static forRoot(cfg: FooterConfigDefault): ModuleWithProviders {
        return {
            ngModule: FooterModule,
            providers: [
                {
                    provide: FOOTER_CONFIG,
                    useValue: cfg
                }
            ]
        }
    }
}

