import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactAddComponent } from './contact-add/contact-add';
import { ContactListComponent } from './contact-list/contact-list';
import { Routes, RouterModule } from '@angular/router';
let routes: Routes = [{
    path: 'contact/index',
    component: ContactListComponent
}, {
    path: 'contact/add',
    component: ContactAddComponent
}];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
    ],
    declarations: [
        ContactListComponent,
        ContactAddComponent
    ],
    providers: [
    ],
})
export class ContactsModule { }
