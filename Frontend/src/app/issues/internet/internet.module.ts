import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './routes/main.component';
import { SharedModule } from '../../shared/shared.module';
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
import { ComplaintExistsMessageComponent } from './routes/complaint-exists-messgae.component';
import { MoveElifeConnectionMessageComponent } from './routes/move-elife-connection-message.component';
import { AppointmentSuccessfulMessageComponent } from './routes/appointment-successful-message.component';
import { ComplaintSuccessfulMessageComponent } from './routes/complaint-successful-message.component';
import { OpenServiceRequestMessageComponent } from './routes/open-service-request-message.component';
import { PackageUpgradeSuccessMessageComponent } from './routes/package-upgrade-success-message.component';
import { RouterAndPackageUpgradeSuccessMessageComponent } from './routes/router-and-package-upgrade-successful-message.component';
import { AccountNotActiveMessageComponent } from './routes/account-not-active-message.component';
import { NewRouterSuccessMessageComponent } from './routes/new-router-success-message.component';
import { PasswordUpdateSuccessfulMessageComponent } from './routes/password-update-successful-message.component';

@NgModule({
  declarations: [
    MainComponent,
    BrowsingUnableStep1Component,
    BrowsingUnableStep2Component,
    BrowsingUnableStep3Component,
    ComplaintExistsMessageComponent,
    RouterFixedRestartRequiredComponent,
    MoveElifeConnectionMessageComponent,
    AppointmentSuccessfulMessageComponent,
    NewRouterSuccessMessageComponent,
    PasswordUpdateSuccessfulMessageComponent,
    ComplaintSuccessfulMessageComponent,
    OpenServiceRequestMessageComponent,
    PackageUpgradeSuccessMessageComponent,
    RouterAndPackageUpgradeSuccessMessageComponent,
    AccountNotActiveMessageComponent,
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
  ],
  imports: [CommonModule, InternetRoutingModule, SharedModule],
})
export class InternetModule {}
