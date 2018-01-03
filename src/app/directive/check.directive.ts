import {
    Directive, Input, TemplateRef,
    ViewContainerRef, OnInit, AfterViewInit
} from '@angular/core';
import { RolesService, RoleInter } from '../roles';
import { EventService } from 'meepo-event';

@Directive({ selector: '[check]' })
export class CheckDirective implements OnInit, AfterViewInit {
    _check: string | string[] = 'all';
    @Input()
    set check(val: string | string[]) {
        this._check = val;
    }
    get check() {
        return this._check;
    }

    @Input() checkElse: TemplateRef<any>;

    permissions: string[] = [];
    constructor(
        public role: RolesService,
        public templateRef: TemplateRef<any>,
        public event: EventService,
        private viewContainer: ViewContainerRef
    ) {
        this.event.subscribe('role.change', (role: RoleInter) => {
            this.role.setRole(role);
            this.validateCheck();
        });
    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        if (this._check) {
            this.validateCheck();
        } else {
            this.handlePermission(this.templateRef);
        }
    }

    private validateCheck() {
        this.role.check(this.check).then(has => {
            if (has) {
                this.handlePermission(this.templateRef);
            } else {
                this.handlePermission(this.checkElse);
            }
        }).catch(err => {
            throw err;
        });
    }

    private handlePermission(template: TemplateRef<any>) {
        this.viewContainer.clear();
        this.showTemp(template);
    }

    private showTemp(template: TemplateRef<any>) {
        if (!template) return;
        this.viewContainer.createEmbeddedView(template);
    }

}