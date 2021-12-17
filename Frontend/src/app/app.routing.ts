import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ThankyouScreenComponent } from './shared/components/thankyou-screen/thankyou-screen.component';
import { LoaderComponent } from './loader/loader.component';
import { QuickLinksAllComponent } from './quick-links-all/quick-links-all.component';
import { GenericErrorComponent } from './shared/components/generic-error/generic-error.component';
import { GenericErrorIssuesComponent } from './shared/components/generic-error-issues/generic-error-issues.component';
import { InstallNewRouterComponent } from './common-quick-links/install-new-router/install-new-router.component';
import { UnknownErrorComesComponent } from './shared/components/unknown-error-comes/unknown-error-comes.component';
import { RouterUnreachableComponent } from './shared/components/router-unreachable.component';

const routes: Routes = [
  {
    path: 'issues/internet',
    loadChildren: () => import('./issues/internet/internet.module').then((m) => m.InternetModule),
  },

  {
    path: 'issues/other',
    loadChildren: () => import('./issues/other/other.module').then((m) => m.OtherModule),
  },

  {
    path: 'issues/password',
    loadChildren: () => import('./issues/password/password.module').then((m) => m.PasswordModule),
  },

  {
    path: 'issues/phone',
    loadChildren: () => import('./issues/phone/phone.module').then((m) => m.PhoneModule),
  },

  {
    path: 'reset-pin',
    loadChildren: () => import('./issues/reset-pin/reset-pin.module').then((m) => m.ResetPinModule),
  },

  {
    path: 'issues/tv',
    loadChildren: () => import('./issues/tv/tv.module').then((m) => m.TvModule),
  },
  {
    path: 'track-complaint',
    loadChildren: () => import('./common-quick-links/track-complaint/track-complaint.module').then((m) => m.TrackComplaintModule),
  },
  {
    path: 'track-request',
    loadChildren: () => import('./common-quick-links/track-request/track-request.module').then((m) => m.TrackRequestModule),
  },

  {
    path: 'install-new-router',
    loadChildren: () => import('./common-quick-links/install-new-router/install-new-router.module').then((m) => m.InstallNewRouterModule),
  },
  {
    path: 'unknown-error',
    component: GenericErrorComponent,
  },
  {
    path: 'unknown-issue',
    component: GenericErrorIssuesComponent,
  },
  {
    path: 'landing',
    component: LandingComponent,
  },

  {
    path: 'quick-links-all',
    component: QuickLinksAllComponent,
  },
  {
    path: 'thanks',
    component: ThankyouScreenComponent,
  },
  {
    path: 'error-comes',
    component: UnknownErrorComesComponent,
  },
  // {
  //   path: 'issues/other/account-id',
  //   loadChildren: () => import('./issues/other/other.module').then((m) => m.OtherModule),
  // },
  {
    path: 'loader',
    component: LoaderComponent,
  },
  {
    path: 'common/router-unreachable',
    component: RouterUnreachableComponent,
  }
  // {
  //   path: '**',
  //   redirectTo: 'issues/other/account-id',
  // },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class RoutingModule {}
