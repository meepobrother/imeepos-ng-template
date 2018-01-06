import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { MeepoHistory } from 'meepo-base';
import { StoreService } from 'meepo-store';
import { Title } from '@angular/platform-browser';
@Component({
    selector: 'contact-list',
    templateUrl: './contact-list.html',
    styleUrls: ['./contact-list.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ContactListComponent extends MeepoHistory {
    key: string = 'contact.list';
    constructor(
        public store: StoreService,
        public cd: ChangeDetectorRef,
        public title: Title
    ) {
        super(store, cd, title);
    }
}