import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BypassOktaGuard } from './guards/app-master.guard';
import { OktaCallbackComponent, OktaAuthGuard, OktaLoginRedirectComponent } from '@okta/okta-angular';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { environment } from '../../environments/environment';

const CALLBACK_PATH = 'implicit/callback';
const oktaConfig = {
    clientId: environment.okta.ClientId,
    issuer: environment.okta.Issuer,
    redirectUri: environment.okta.RedirectUri,
    pkce: environment.okta.Pkce,
};
const oktaAuthGuard = environment.disableOkta ? BypassOktaGuard : OktaAuthGuard;

const routes: Routes = [
    { path: CALLBACK_PATH, component: OktaCallbackComponent },
    { path: 'login', component: OktaLoginRedirectComponent },
    {
        path: 'app',
        canActivate: [oktaAuthGuard],
        //  resolve: { DashboardResolver, OktaAuthenticationResolverService },
        loadChildren: () => import('../feature/submission/submission.module').then((m) => m.SubmissionModule),
    },
    {
        path: '**',
        redirectTo: '/app/home'
    }
];

@NgModule({
    imports: [CommonModule, OktaAuthModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [{ provide: OKTA_CONFIG, useValue: oktaConfig }],
})
export class RoutingModule { }
