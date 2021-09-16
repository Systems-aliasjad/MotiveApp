import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './routes/main.component';
import { SharedModule } from '../../shared/shared.module';
import { PasswordRoutingModule } from './password.routing';
import { InternetPasswordResetComponent } from './routes/internet-password-reset.component';
import { RequestFailComponent } from './routes/request-fail.component';
import { ResetPasswordFailComponenet } from './routes/reset-password-fail.component';
import { UnableToReachRouterFailComponent } from './routes/unable-reach-router-fail.component';
import { UnableToReachRouterComponent } from './routes/unable-reach-router.component';
import { ResetRouterWiFiPasswordSuccess } from './routes/reset-router-wifi-password-success.component';
import { ResetInternetPasswordSuccessDetailComponent } from './routes/rest-internet-password-success-detail.component';
import { TryAgainErrorComponent } from './routes/try-again-error.component';
import { ResetInternetPasswordFailComponent } from './routes/reset-internet-password-fail.component';
import { ResetInternetPasswordSuccessComponent } from './routes/reset-internet-password-success.component';

@NgModule({
  declarations: [
    MainComponent,
    InternetPasswordResetComponent,
    RequestFailComponent,
    ResetPasswordFailComponenet,
    UnableToReachRouterComponent,
    UnableToReachRouterFailComponent,
    ResetRouterWiFiPasswordSuccess,
    ResetInternetPasswordSuccessDetailComponent,
    TryAgainErrorComponent,
    ResetInternetPasswordFailComponent,
    ResetInternetPasswordSuccessComponent,
  ],
  imports: [CommonModule, PasswordRoutingModule, SharedModule],
})
export class PasswordModule {}
