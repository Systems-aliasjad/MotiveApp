import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { createTranslateLoader } from '../app.module';
import { SharedModule } from '../shared/shared.module';

import { NoIssuesServiceDetailsComponent } from './routes/no-issues-service-details/no-issues-service-details.component';
import { ResetPinFailedMessageComponent } from './routes/reset-pin-failed-message.component';
import { FiberBoxNotReachableComponent } from './routes/fiber-box-not-reachable-message.component';
import { PhoneNotReachableComponent } from './routes/phone-not-reachable.component';
import { OntRebootRequiredTvComponent } from './routes/ont-reboot-required-tv.component';
import { OntRebootRequiredInternetComponent } from './routes/ont-reboot-required-internet.component';
import { CustomerNotSameRouterComponent } from './routes/customer-not-same-router.component';
import { OutageComponent } from './routes/outage.component';
import { IssueNotFixedComponent } from './routes/issue-not-fixed.component';
import { AllServicesRoutingModule } from './all-services.routing';
// import { InternetModule } from '../issues/internet/internet.module';
// import { TvModule } from '../issues/tv/tv.module';
// import { PhoneModule } from '../issues/phone/phone.module';
import { RouterRebootRequiredComponent } from './routes/router-reboot-required.component';

@NgModule({
  declarations: [
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
    // InternetModule,
    // TvModule,
    // PhoneModule,
    AllServicesRoutingModule,
    SharedModule,
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
  ],
})
export class AllServicesModule {}
