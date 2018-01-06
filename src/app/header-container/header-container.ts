import { Component, OnInit } from '@angular/core';
import { EventService } from 'meepo-event';
import { HEADER_CHANGE } from '../event';

@Component({
    selector: 'header-container',
    templateUrl: './header-container.html',
    styleUrls: ['./header-container.scss']
})
export class HeaderContainerComponent implements OnInit {
    constructor(
        public event: EventService
    ) {
        this.event.subscribe(HEADER_CHANGE, (header) => {

        });
    }

    ngOnInit() { }
}