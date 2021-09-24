import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternetPasswordResetComponent } from './routes/internet-password-reset.component';

import { MainComponent } from './routes/main.component';
import { RequestFailComponent } from './routes/request-fail.component';
import { ResetElifeOnPinComponent } from './routes/reset-elife-on-pin.component';
import { ResetInternetPasswordFailComponent } from './routes/reset-internet-password-fail.component';
import { ResetInternetPasswordSuccessComponent } from './routes/reset-internet-password-success.component';
import { ResetPasswordFailComponenet } from './routes/reset-password-fail.component';
import { ResetRouterPasswordComponent } from './routes/reset-router-password.component';
import { ResetRouterWiFiPasswordSuccess } from './routes/reset-router-wifi-password-success.component';
import { ResetTvAdminPinComponent } from './routes/reset-tv-admin-pin.component';
import { ResetInternetPasswordSuccessDetailComponent } from './routes/rest-internet-password-success-detail.component';
import { TryAgainErrorComponent } from './routes/try-again-error.component';
import { UnableToReachRouterFailComponent } from './routes/unable-reach-router-fail.component';
import { UnableToReachRouterComponent } from './routes/unable-reach-router.component';

const routes: Routes = [
  {
    //Internet password reset
    path: 'internet-password-reset',
    component: InternetPasswordResetComponent,
  },

  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'unable-to-process-request',
    component: RequestFailComponent,
  },
  {
    path: 'unable-to-reset-password',
    component: ResetPasswordFailComponenet,
  },
  {
    path: 'unable-to-reach-router',
    component: UnableToReachRouterComponent,
  },
  {
    path: 'unable-to-reach-router-failed',
    component: UnableToReachRouterFailComponent,
  },
  {
    path: 'reset-router-password-success',
    component: ResetRouterWiFiPasswordSuccess,
  },
  {
    path: 'internet-password-reset-detail',
    component: ResetInternetPasswordSuccessDetailComponent,
  },
  {
    path: 'internet-password-reset-fail',
    component: TryAgainErrorComponent,
  },
  {
    path: 'internet-password-reset-error',
    component: ResetInternetPasswordFailComponent,
  },
  {
    path: 'internet-password-reset-success',
    component: ResetInternetPasswordSuccessComponent,
  },
  {
    path: 'reset-eLifeON-pin',
    component: ResetElifeOnPinComponent,
  },

  {
    path: 'reset-tv-admin-pin',
    component: ResetTvAdminPinComponent,
  },
  {
    path: 'reset-router-password',
    component: ResetRouterPasswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordRoutingModule {}
