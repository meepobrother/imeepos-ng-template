import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BaseModule } from '../../src/app/app';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

