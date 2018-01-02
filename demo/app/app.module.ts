import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from 'meepo-store';
import { QrcodeModule } from '../../src/app/app';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule,
    QrcodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

