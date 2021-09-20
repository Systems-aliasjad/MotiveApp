import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './routes/main.component';
import { createTranslateLoader, SharedModule } from '../../shared/shared.module';
import { InternetRoutingModule } from './internet.routing';
import { OutageComponent } from './routes/outage.component';
import { OSRPComponent } from './routes/osrp.component';
import { RouterRebootRequiredComponent } from './routes/router-reboot-required.component';
import { RouterResetRequiredComponent } from './routes/router-reset-required.component';
import { IssueNotFixedComponent } from './routes/issue-not-fixed.component';
import { PasswordResetComponent } from './routes/password-reset.component';
import { ThirdPartyRouterResetComponent } from './routes/3rd-party-router-reset.component';
import { PackageUpgradeRecommendedComponent } from './routes/package-upgrade-recommended.component';
import { RouterUpgradeRecommendedComponent } from './routes/router-upgrade-recommended.component';
import { WifiAlarmComponent } from './routes/wifi-alarm.component';
import { RouterPackageUpgradeRecommendedComponent } from './routes/router-package-upgrade.component';
import { ThirdPartyRouterComponent } from './routes/3rd-party-router.component';
import { RouterNotReachableComponent } from './routes/router-not-reachable.component';
import { RouterNotReachableOwnRouterComponent } from './routes/router-not-reachable-own-router.component';
import { NoIssuesComponent } from './routes/no-issues.component';
import { RouterNotRestartedComponent } from './routes/router-not-restarted.component';
import { RouterRestartInstructionsComponent } from './routes/router-restart-instructions.component';
import { RouterNotRestartedCareComponent } from './routes/router-not-restarted-care.component';
import { RouterFixedRestartRequiredComponent } from './routes/router-fixed-restart-required.component';
import { RouterRestartCareComponent } from './routes/router-restart-care.component';
import { InstallNewRouterMessageComponent } from './routes/install-new-router-message.component';
import { RouterInstallSuccessfullyMessageComponent } from './routes/router-install-successfully-message.component';
import { RouterInstallationFailedMessageComponent } from './routes/router-installation-failed-message.component';
import { RouterResetFactoryComponent } from './routes/router-reset-factory.component';
import { RouterUpgradeSuccessComponent } from './routes/router-upgrade-success.component';
import { ThirdPartyRouterResetCareComponent } from './routes/3rd-party-router-reset-care.component';
import { BrowsingUnableStep1Component } from './routes/browsing-unable-step1.component';
import { BrowsingUnableStep2Component } from './routes/browsing-unable-step2.component';
import { BrowsingUnableStep3Component } from './routes/browsing-unable-step3.component';
import { InstallNewRouterCareComponent } from './routes/install-new-router-care.component';
import { InstallNewRouterComplaintSuccessfullyMessageComponent } from './routes/install-new-router-complaint-successfully-message.component';
import { InstallNewRouterFlow2MessageComponent } from './routes/install-new-router-flow2-message.component';
import { InstallNewRouterFlow4MessageComponent } from './routes/install-new-router-flow4-message.component';
import { InstallNewRouterResetInternetPasswordComponent } from './routes/install-new-router-reset-internet-passoword.component';
import { InstallNewRouterFlow5MessageComponent } from './routes/install-new-router-flow5-message.component';
import { InstallEtisalatRouterComponent } from './routes/install-etisalat-router/install-etisalat-router.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  declarations: [
    MainComponent,
    BrowsingUnableStep1Component,
    BrowsingUnableStep2Component,
    BrowsingUnableStep3Component,
    RouterFixedRestartRequiredComponent,
    RouterRestartCareComponent,
    RouterNotRestartedCareComponent,
    OutageComponent,
    OSRPComponent,
    RouterNotRestartedComponent,
    RouterRestartInstructionsComponent,
    RouterRebootRequiredComponent,
    RouterResetRequiredComponent,
    IssueNotFixedComponent,
    PasswordResetComponent,
    ThirdPartyRouterResetComponent,
    ThirdPartyRouterResetCareComponent,
    PackageUpgradeRecommendedComponent,
    RouterUpgradeRecommendedComponent,
    WifiAlarmComponent,
    RouterPackageUpgradeRecommendedComponent,
    ThirdPartyRouterComponent,
    RouterNotReachableComponent,
    RouterNotReachableOwnRouterComponent,
    NoIssuesComponent,
    InstallNewRouterMessageComponent,
    RouterInstallSuccessfullyMessageComponent,
    RouterInstallationFailedMessageComponent,
    RouterResetFactoryComponent,
    RouterUpgradeSuccessComponent,
    InstallNewRouterCareComponent,
    InstallNewRouterComplaintSuccessfullyMessageComponent,
    InstallNewRouterFlow2MessageComponent,
    InstallNewRouterFlow4MessageComponent,
    InstallNewRouterResetInternetPasswordComponent,
    InstallNewRouterFlow5MessageComponent,
    InstallEtisalatRouterComponent,
  ],
  imports: [
    CommonModule,
    InternetRoutingModule,
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
    BrMaskerModule,
  ],
})
export class InternetModule {}
