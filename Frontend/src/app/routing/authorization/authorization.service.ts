import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthorizationService {
    getRole(id: string): any {
        return 'admin';
    }

    constructor() {}
}
