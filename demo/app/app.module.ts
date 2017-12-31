import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RxjsModule } from '../../src/app/app';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RxjsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

