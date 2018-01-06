import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContactsModule } from '../../src/app/app';
import { RouterModule, Routes } from '@angular/router';
let routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'contact/index'
}];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContactsModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

