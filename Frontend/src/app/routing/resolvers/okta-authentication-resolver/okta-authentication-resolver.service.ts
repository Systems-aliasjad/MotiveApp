import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class OktaAuthenticationResolverService implements Resolve<OktaUser> {
    constructor(private oktaAuth: OktaAuthService) { }

    async resolve(route: ActivatedRouteSnapshot) {
        if (route.paramMap.get('id')) {
            environment.disableOkta = true;
            environment.impersonateUser = route.paramMap.get('id') ? route.paramMap.get('id') : environment.impersonateUser;
            const user: OktaUser = {
                email: environment.impersonateUser + '@transre.com',
                aud: undefined,
                auth_time: undefined,
                email_verified: true,
                exp: undefined,
                family_name: undefined,
                given_name: environment.impersonateUser,
                iat: undefined,
                iss: undefined,
                jti: undefined,
                locale: undefined,
                name: environment.impersonateUser,
                nonce: undefined,
                preferred_username: environment.impersonateUser,
                sub: undefined,
                updated_at: undefined,
                ver: undefined,
                zoneinfo: undefined,
            };
            console.log(user);
            return user;
        } else if (this.oktaAuth.getAccessToken()) {
            return await this.oktaAuth.getUser();
        }
    }
}
export class OktaUser {
    email?: string;
    aud?: any;
    auth_time?: any;
    email_verified?: boolean;
    exp?: any;
    family_name?: any;
    given_name?: string;
    iat?: any;
    iss?: any;
    jti?: any;
    locale?: any;
    name?: string;
    nonce?: any;
    preferred_username?: string;
    sub?: any;
    updated_at?: any;
    ver?: any;
    zoneinfo?: any;
}
