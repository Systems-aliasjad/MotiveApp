import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherRoutingModule } from './other.routing';
import { MainComponent } from './routes/main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountIdComponent } from './routes/account-id/account-id.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/app/app.module';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ResetPinFailedMessageComponent } from './routes/reset-pin-failed-message.component';
import { FiberBoxNotReachableComponent } from './routes/fiber-box-not-reachable-message.component';
import { PhoneNotReachableComponent } from './routes/phone-not-reachable.component';
import { OntRebootRequiredTvComponent } from './routes/ont-reboot-required-tv.component';
import { OntRebootRequiredInternetComponent } from './routes/ont-reboot-required-internet.component';
import { CustomerNotSameRouterComponent } from './routes/customer-not-same-router.component';
import { OutageComponent } from './routes/outage.component';
import { IssueNotFixedComponent } from './routes/issue-not-fixed.component';
import { NoIssuesServiceDetailsComponent } from './routes/no-issues-service-details/no-issues-service-details.component';
import { RouterRebootRequiredComponent } from './routes/router-reboot-required.component';
import { InternetModule } from '../internet/internet.module';
import { TvModule } from '../tv/tv.module';
import { PhoneModule } from '../phone/phone.module';
import { NoIssuesComponent } from './routes/no-issues.component';

@NgModule({
  declarations: [
    MainComponent,
    NoIssuesComponent,
    AccountIdComponent,
    ResetPinFailedMessageComponent,
    FiberBoxNotReachableComponent,
    PhoneNotReachableComponent,
    OntRebootRequiredTvComponent,
    OntRebootRequiredInternetComponent,
    CustomerNotSameRouterComponent,
    OutageComponent,
    IssueNotFixedComponent,
    NoIssuesServiceDetailsComponent,
    RouterRebootRequiredComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    OtherRoutingModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    SharedModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
    InternetModule,
    TvModule,
    PhoneModule,
  ],
})
export class OtherModule {}
