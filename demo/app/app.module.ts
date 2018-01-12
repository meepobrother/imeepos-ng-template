import { ImeeposCoreModule, ImeeposRootPage } from '../../src/app/app';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [
    ImeeposCoreModule.forRoot()
  ],
  bootstrap: [ImeeposRootPage]
})
export class AppModule { }
