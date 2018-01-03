import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FooterModule } from '../../src/app/app';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FooterModule.forRoot({
      url: './assets/footer.json'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

