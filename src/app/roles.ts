import { Injectable, InjectionToken, Inject } from '@angular/core';
export const ROLE_DEFAULT = new InjectionToken('role_default');
import { UtilService } from 'meepo-core';
@Injectable()
export class RolesService {
    role: RoleInter;
    constructor(
        @Inject(ROLE_DEFAULT) role: RoleInter,
        public util: UtilService
    ) {
        this.role = role;
    }

    check(keys: string | string[]): Promise<any> {
        return new Promise((resolve, reject) => {
            if (this.role.items) {
                let has: boolean = false;
                if (this.util.isArray(keys)) {
                    keys.map(key => {
                        if (key === 'all') {
                            has = true;
                        }
                        if (this.role.items.indexOf(key) >= 0) {
                            has = true;
                        }
                    });
                } else {
                    if (keys === 'all') {
                        has = true;
                    } else {
                        has = this.role.items.indexOf(keys) >= 0;
                    }
                }
                resolve(has);
            } else {
                resolve(true);
            }
        });
    }

    setRole(role: RoleInter) {
        this.role = role;
    }
}

export interface RoleInter {
    title?: string;
    code?: string;
    items?: string[];
}
