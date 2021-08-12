import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { BypassOktaGuard } from './guards/app-master.guard';
// import { OktaAuthGuard } from '@okta/okta-angular';
// import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
// import { environment } from '../../environments/environment';

// const oktaAuthGuard = environment.disableOkta ? BypassOktaGuard : OktaAuthGuard;

const routes: Routes = [
    // { path: 'login', component: OktaLoginRedirectComponent },
    {
        path: '',
        // canActivate: [oktaAuthGuard],
        //  resolve: { DashboardResolver, OktaAuthenticationResolverService },
        loadChildren: () => import('../feature/submission/submission.module').then((m) => m.SubmissionModule),
    },
];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [],
})
export class RoutingModule {}
