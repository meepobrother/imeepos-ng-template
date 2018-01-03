import {
    Component, OnInit,
    ChangeDetectorRef,
    Inject, InjectionToken, Optional
} from '@angular/core';
import { MeepoCache } from 'meepo-base';
import { StoreService } from 'meepo-store';
import { UtilService } from 'meepo-core';
import { AxiosService } from 'meepo-axios';
import { EventService } from 'meepo-event';
import { VERSION_CHANGE } from '../event';
export const FOOTER_CONFIG = new InjectionToken('footer.config');

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

export interface FooterConfigDefault {
    url?: string;
    name?: string;
};

@Component({
    selector: 'footer',
    templateUrl: './footer.html',
    styleUrls: [
        './footer.scss'
    ]
})
export class FooterComponent extends MeepoCache {
    key: string = 'footer.component';
    data: FooterItemInter[] = [];
    constructor(
        store: StoreService,
        cd: ChangeDetectorRef,
        title: Title,
        public util: UtilService,
        @Inject(FOOTER_CONFIG) public cfg: FooterConfigDefault,
        public axios: AxiosService,
        public event: EventService,
        @Optional() private router: Router
    ) {
        super(store, cd, title);
        this.event.subscribe(VERSION_CHANGE, () => {
            this.clearAll();
            this.meepoInit();
        });
    }

    meepoInit() {
        if (this.data && this.util.isArray(this.data) && this.data.length > 0) {
        } else {
            this.axios.get(this.cfg.url).subscribe((res: any) => {
                let data: FooterItemInter[] = res.info;
                this.updateCache(data);
            });
        }
        this.cd.markForCheck();
    }

    _onItem(item: any) {
        let datas = this.data;
        datas.map(res => {
            res.active = 'off';
        });
        item.active = 'on';
        this.updateCache(this.data);
        if (item.link && this.router) {
            this.router.navigate(item.link, { queryParams: item.params });
        }
    }

    clearAll() {
        this.updateCache([]);
    }
}


export interface FooterItemInter {
    title?: string;
    icon?: string;
    role?: string;
    active?: string;
    params?: any;
}