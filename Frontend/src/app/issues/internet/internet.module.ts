import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { BrMaskerModule } from 'br-mask';

import { createTranslateLoader, SharedModule } from '../../shared/shared.module';
import { MainComponent } from './routes/main.component';
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

import { RouterInstallSuccessfullyMessageComponent } from './routes/router-install-successfully-message.component';
import { RouterInstallationFailedMessageComponent } from './routes/router-installation-failed-message.component';
import { RouterResetFactoryComponent } from './routes/router-reset-factory.component';
import { RouterUpgradeSuccessComponent } from './routes/router-upgrade-success.component';
import { ThirdPartyRouterResetCareComponent } from './routes/3rd-party-router-reset-care.component';
import { BrowsingUnableStep1Component } from './routes/browsing-unable-step1.component';
import { BrowsingUnableStep2Component } from './routes/browsing-unable-step2.component';
import { BrowsingUnableStep3Component } from './routes/browsing-unable-step3.component';
import { InstallNewRouterCareComponent } from './routes/install-new-router/install-new-router-care.component';
import { PnpPortManagedRouterMessageComponent } from './routes/install-new-router/pnp-Port-Managed-Router-Message.Component';
import { InstallEtisalatRouterComponent } from './routes/install-etisalat-router/install-etisalat-router.component';
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
import { RouterUpgradeComponent } from './routes/router-upgrade.component';
import { RouterNotReachableFormComponent } from './routes/router-not-reachable-form.component';
import { ThirdPartyRouterFormComponent } from './routes/third-party-router-form.component';
import { RouterPackageUpgradeRecommendedFormComponent } from './routes/router-package-upgrade-recommended-form.component';
import { RouterUpgradeRecommendedFormComponent } from './routes/router-upgrade-recommended-form.component';
import { BookComplaintComponent } from './routes/book-complaint.component';
import { ResetInternetPasswordComponent } from './routes/reset-internet-password/reset-internet-password.component';
import { ServiceDetailComponent } from './routes/service-detail/service-detail.component';
import { InstallNewRouterMessageComponent } from './routes/install-new-router/install-new-router-message.component';
import { InstallNewRouterComplaintSuccessfullyMessageComponent } from './routes/install-new-router/install-new-router-complaint-successfully-message.component';
import { ContinueInstallingThirdPartyRouterMessageComponent } from './routes/install-new-router/continue-installing-thirdparty-router-message.component';
import { InstallNewRouterResetInternetPasswordComponent } from './routes/install-new-router/install-new-router-reset-internet-passoword.component';
import { AccessPortThirdPartyRouterMessageComponent } from './routes/install-new-router/access-port-third-party-router-message.component';
import { InstallNewEtisalatRouterMessageComponent } from './routes/install-new-router/install-new-etisalat-router-message.component';
import { InstallNewThirdPartyRouterMessageComponent } from './routes/install-new-router/install-new-thirdparty-router-message.component';
import { RouterResetSuccessfullMessageComponent } from './routes/router-resest-successful-message.component';
import { UnableHomezoneConnectionComponent } from './routes/unable-homezone-connection/unable-homezone-connection.component';
import { BookAppointmentComponent } from './routes/book-appointment.component';
import { RouterNotReachableOwnCareComponent } from './routes/router-not-reachable-own-care.component';

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
    ServiceDetailComponent,
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
    UnableHomezoneConnectionComponent,
    ThirdPartyRouterComponent,
    RouterNotReachableComponent,
    RouterNotReachableOwnRouterComponent,
    NoIssuesComponent,
    InstallNewRouterMessageComponent,
    RouterInstallSuccessfullyMessageComponent,
    RouterInstallationFailedMessageComponent,
    RouterResetFactoryComponent,
    RouterUpgradeComponent,
    RouterUpgradeSuccessComponent,
    InstallNewRouterCareComponent,
    InstallNewRouterComplaintSuccessfullyMessageComponent,
    PnpPortManagedRouterMessageComponent,
    ContinueInstallingThirdPartyRouterMessageComponent,
    InstallNewRouterResetInternetPasswordComponent,
    AccessPortThirdPartyRouterMessageComponent,
    InstallNewEtisalatRouterMessageComponent,
    InstallNewThirdPartyRouterMessageComponent,
    ResetInternetPasswordComponent,
    InstallEtisalatRouterComponent,
    RouterNotReachableFormComponent,
    ThirdPartyRouterFormComponent,
    RouterPackageUpgradeRecommendedFormComponent,
    RouterUpgradeRecommendedFormComponent,
    BookComplaintComponent,
    RouterResetSuccessfullMessageComponent,
    BookAppointmentComponent,
    RouterNotReachableOwnCareComponent,
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
  exports: [ServiceDetailComponent],
})
export class InternetModule {}
