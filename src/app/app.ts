import { NgModule } from '@angular/core';
import { QrcodeComponent } from './qrcode/qrcode';
import { MeepoCoreServiceModule } from 'meepo-core';
import { UuidModule } from 'meepo-uuid';

@NgModule({
    imports: [
        MeepoCoreServiceModule,
        UuidModule
    ],
    exports: [QrcodeComponent],
    declarations: [QrcodeComponent],
    providers: [],
})
export class QrcodeModule { }
export { QrcodeComponent } from './qrcode/qrcode';

