import { NgModule, ModuleWithProviders } from '@angular/core';
import { CheckDirective } from './directive/check.directive';
import { RolesService, ROLE_DEFAULT, RoleInter } from './roles';
import { EventModule } from 'meepo-event';
import { MeepoCoreServiceModule } from 'meepo-core';

@NgModule({
    imports: [
        EventModule.forRoot(),
        MeepoCoreServiceModule
    ],
    exports: [
        CheckDirective
    ],
    declarations: [
        CheckDirective
    ],
    providers: [
        RolesService
    ],
})
export class PermissionsModule {
    public static forRoot(cfg: RoleInter): ModuleWithProviders {
        return {
            ngModule: PermissionsModule,
            providers: [
                {
                    provide: ROLE_DEFAULT,
                    useValue: cfg
                }
            ]
        }
    }
}
export { RolesService, ROLE_DEFAULT, RoleInter } from './roles';

