import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThirdPartyRouterResetComponent } from './routes/3rd-party-router-reset.component';
import { ThirdPartyRouterComponent } from './routes/3rd-party-router.component';
import { PasswordResetComponent } from './routes/password-reset.component';

import { MainComponent } from './routes/main.component';
import { NoIssuesComponent } from './routes/no-issues.component';
import { OutageComponent } from './routes/outage.component';
import { RouterNotRestartedComponent } from './routes/router-not-restarted.component';
import { PackageUpgradeRecommendedComponent } from './routes/package-upgrade-recommended.component';
import { RouterNotReachableOwnRouterComponent } from './routes/router-not-reachable-own-router.component';
import { RouterNotReachableComponent } from './routes/router-not-reachable.component';
import { RouterPackageUpgradeRecommendedComponent } from './routes/router-package-upgrade.component';
import { RouterRebootRequiredComponent } from './routes/router-reboot-required.component';
import { RouterResetRequiredComponent } from './routes/router-reset-required.component';
import { RouterUpgradeRecommendedComponent } from './routes/router-upgrade-recommended.component';
import { WifiAlarmComponent } from './routes/wifi-alarm.component';
import { RouterRestartInstructionsComponent } from './routes/router-restart-instructions.component';
import { IssueNotFixedComponent } from './routes/issue-not-fixed.component';
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
import { ThirdPartyRouterFormComponent } from './routes/third-party-router-form.component';
import { RouterPackageUpgradeRecommendedFormComponent } from './routes/router-package-upgrade-recommended-form.component';
import { RouterNotReachableFormComponent } from './routes/router-not-reachable-form.component';
import { BookComplaintComponent } from './routes/book-complaint.component';
import { ResetInternetPasswordComponent } from './routes/reset-internet-password/reset-internet-password.component';
import { ResetInternetPasswordSuccessComponent } from '../password/routes/reset-internet-password-success.component';
import { ServiceDetailComponent } from './routes/service-detail/service-detail.component';
import { InstallNewRouterMessageComponent } from './routes/install-new-router/install-new-router-message.component';
import { InstallNewRouterComplaintSuccessfullyMessageComponent } from './routes/install-new-router/install-new-router-complaint-successfully-message.component';
import { ContinueInstallingThirdPartyRouterMessageComponent } from './routes/install-new-router/continue-installing-thirdparty-router-message.component';
import { InstallNewEtisalatRouterMessageComponent } from './routes/install-new-router/install-new-etisalat-router-message.component';
import { InstallNewThirdPartyRouterMessageComponent } from './routes/install-new-router/install-new-thirdparty-router-message.component';
import { AccessPortThirdPartyRouterMessageComponent } from './routes/install-new-router/access-port-third-party-router-message.component';
import { InstallNewRouterResetInternetPasswordComponent } from './routes/install-new-router/install-new-router-reset-internet-passoword.component';
import { RouterResetSuccessfullMessageComponent } from './routes/router-resest-successful-message.component';
import { UnableHomezoneConnectionComponent } from './routes/unable-homezone-connection/unable-homezone-connection.component';
import { BookAppointmentComponent } from './routes/book-appointment.component';
import { RouterNotReachableOwnCareComponent } from './routes/router-not-reachable-own-care.component';
import { ResetWIFIPasswordComponent } from './routes/reset-wifi-password.component';
import { UnableToConnectNewDeviceWiFiComponent } from './routes/unable-to-connect-newDevice-wifi.component';
import { UnableToMaleVideoCallComponent } from './routes/unable-to-make-video-call.component';
import { CancelElifeConnectionMessageComponent } from './routes/cancel-elife-connection-message.component';
import { AccountTemporarilyDisconnectedMessageComponent } from './routes/account-temporarily-disconnected-message.component';
import { RouterUpgradeRecommendedFormComponent } from './routes/router-upgrade-recommended-form.component';
import { ComplaintBookingFailedInvalidContactComponent } from './routes/complaint-booking-failed-invalid-contact.component';
import { ComplaintBookingFailedComponent } from './routes/complaint-booking-failed.component';
import { RouterRebootSuccessfulComponent } from './routes/router-reboot-successful.component';
import { RouterResetSuccessfulComponent } from './routes/router-resest-successful.component';
import { ServerTimeOutComponent } from './routes/server-time-out.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'router-not-restarted/device-care',
    component: RouterNotRestartedCareComponent,
  },
  {
    path: 'unable-to-browse-internet/step1',
    component: BrowsingUnableStep1Component,
  },
  {
    path: 'unable-to-browse-internet/step2',
    component: BrowsingUnableStep2Component,
  },
  {
    path: 'service-detail',
    component: ServiceDetailComponent,
  },
  {
    path: 'osrp/move-elife-connection',
    component: MoveElifeConnectionMessageComponent,
  },
  {
    path: 'osrp/cancel-elife-connection',
    component: CancelElifeConnectionMessageComponent,
  },
  {
    path: 'osrp/account-temporarily-disconnected',
    component: AccountTemporarilyDisconnectedMessageComponent,
  },
  {
    path: 'appointment-successful',
    component: AppointmentSuccessfulMessageComponent,
  },
  {
    path: 'compalint-successful',
    component: ComplaintSuccessfulMessageComponent,
  },
  {
    path: 'open-technical-request',
    component: OpenServiceRequestMessageComponent,
  },
  {
    path: 'package-upgrade-success',
    component: PackageUpgradeSuccessMessageComponent,
  },
  {
    path: 'router-and-package-upgrade-success',
    component: RouterAndPackageUpgradeSuccessMessageComponent,
  },
  {
    path: 'account-not-active',
    component: AccountNotActiveMessageComponent,
  },
  {
    path: 'unable-to-connect-to-homezone',
    component: UnableHomezoneConnectionComponent,
  },
  {
    path: 'unable-to-browse-internet/step3',
    component: BrowsingUnableStep3Component,
  },
  {
    path: 'password-update-success',
    component: PasswordUpdateSuccessfulMessageComponent,
  },
  {
    path: 'new-router-request-success',
    component: NewRouterSuccessMessageComponent,
  },

  {
    path: 'complaint-already-exists',
    component: ComplaintExistsMessageComponent,
  },
  {
    path: 'outage',
    component: OutageComponent,
  },
  {
    path: 'router-fixed-restart-required',
    component: RouterFixedRestartRequiredComponent,
  },
  {
    path: 'router-not-restarted',
    component: RouterNotRestartedComponent,
  },
  {
    path: 'router-restart',
    component: RouterRestartInstructionsComponent,
  },
  {
    path: 'router-restart/device-care',
    component: RouterRestartCareComponent,
  },
  {
    //Router Reboot Required
    path: 'router-reboot-required',
    component: RouterRebootRequiredComponent,
  },

  {
    //Router Reset Required
    path: 'router-reset-required',
    component: RouterResetRequiredComponent,
  },

  {
    //Issue not fixed
    path: 'issue-not-fixed',
    component: IssueNotFixedComponent,
  },

  {
    //Internet password reset
    path: 'internet-password-reset',
    component: PasswordResetComponent,
  },

  {
    //3rd party router requires configuration
    path: '3rd-party-router-reset',
    component: ThirdPartyRouterResetComponent,
  },
  {
    //3rd party router requires configuration
    path: '3rd-party-router-reset/device-care',
    component: ThirdPartyRouterResetCareComponent,
  },

  {
    //Package Upgrade Recommended
    path: 'package-upgrade-recommended',
    component: PackageUpgradeRecommendedComponent,
  },

  {
    //Router Upgrade Recommended
    path: 'router-upgrade-recommended',
    component: RouterUpgradeRecommendedComponent,
  },

  {
    //Wi-Fi Alarm
    path: 'wifi-alarm',
    component: WifiAlarmComponent,
  },

  {
    //Router & package upgrade recommended
    path: 'router-package-upgrade',
    component: RouterPackageUpgradeRecommendedComponent,
  },

  {
    // 3rd party router
    path: 'third-party-router',
    component: ThirdPartyRouterComponent,
  },

  {
    //Router managed, but not reachable
    path: 'router-not-reachable',
    component: RouterNotReachableComponent,
  },

  {
    //Router managed, but not reachable
    path: 'router-not-reachable-own-router',
    component: RouterNotReachableOwnRouterComponent,
  },

  {
    //no issues
    path: 'no-issue',
    component: NoIssuesComponent,
  },

  {
    // //quick links
    //I want to install my new router
    path: 'install-new-router',
    component: InstallNewRouterMessageComponent,
  },

  {
    // //quick links
    //I want to install my new router
    //Care Screen
    path: 'install-new-router-care',
    component: InstallNewRouterCareComponent,
  },

  {
    //quick links
    //router installed successfully
    path: 'router-install-successfully',
    component: RouterInstallSuccessfullyMessageComponent,
  },

  {
    //quick links
    //router installation failed
    path: 'router-installation-failed',
    component: RouterInstallationFailedMessageComponent,
  },

  {
    //quick links
    //I wanto to factory reset my router
    path: 'router-reset-factory',
    component: RouterResetFactoryComponent,
  },
  {
    path: 'router-upgrade',
    component: RouterUpgradeComponent,
  },

  {
    //quick links
    //I wanto to factory reset my router
    //Complaint Raised Successfully

    path: 'install-new-router-complaint-successfully',
    component: InstallNewRouterComplaintSuccessfullyMessageComponent,
  },

  {
    //quick links
    //I want to install my new router
    //Flow 2 Main

    path: 'install-new-route/pnp-port-managed-router',
    component: PnpPortManagedRouterMessageComponent,
  },

  {
    //quick links
    //I want to install my new router
    //Flow 4 Message

    path: 'install-new-router/continue-installing-thirdparty-router',
    component: ContinueInstallingThirdPartyRouterMessageComponent,
  },

  {
    //quick links
    //I want to install my new router
    //Flow 6 Message

    path: 'install-new-router/install-new-etisalat-router',
    component: InstallNewEtisalatRouterMessageComponent,
  },

  {
    //quick links
    //I want to install my new router
    //Flow 7 Message

    path: 'install-new-router/install-new-thirdparty-router',
    component: InstallNewThirdPartyRouterMessageComponent,
  },

  {
    //quick links
    //I want to install my new router
    //Flow 5 Message

    path: 'install-new-router-flow5',
    component: AccessPortThirdPartyRouterMessageComponent,
  },

  {
    //quick links
    //I want to install my new router
    //
    path: 'install-new-router-reset-internet-password',
    component: InstallNewRouterResetInternetPasswordComponent,
  },

  {
    path: 'reset-internet-password',
    component: ResetInternetPasswordComponent,
  },

  {
    //quick links
    //I want to install my new router
    //Install etisalat router
    //App.MotiveH&S.5.1.22
    //
    path: 'install-etisalat-router',
    component: InstallEtisalatRouterComponent,
  },

  {
    //Router upgrade Request Successfully
    path: 'router-upgrade-success',
    component: RouterUpgradeSuccessComponent,
  },
  {
    path: 'router-not-reachable-form',
    component: RouterNotReachableFormComponent,
  },
  {
    path: 'third-party-router-form',
    component: ThirdPartyRouterFormComponent,
  },
  {
    path: 'router-package-upgrade-recommended-form',
    component: RouterPackageUpgradeRecommendedFormComponent,
  },
  {
    path: 'book-complaint',
    component: BookComplaintComponent,
  },
  {
    path: 'book-appointment',
    component: BookAppointmentComponent,
  },
  {
    path: 'internet-password-reset-success',
    component: ResetInternetPasswordSuccessComponent,
  },

  {
    //App.MotiveH&S.5.2.8
    path: 'router-reset-successfull-message',
    component: RouterResetSuccessfullMessageComponent,
  },
  {
    //App.MotiveH&S.5.2.8
    path: 'router-not-reachable-own-care',
    component: RouterNotReachableOwnCareComponent,
  },
  {
    path: 'reset-wifi-password',
    component: ResetWIFIPasswordComponent,
  },
  {
    path: 'unable-connect-newDevice',
    component: UnableToConnectNewDeviceWiFiComponent,
  },
  {
    path: 'unable-video-call',
    component: UnableToMaleVideoCallComponent,
  },

  {
    path: 'router-upgrade-recommended-form',
    component: RouterUpgradeRecommendedFormComponent,
  },
  {
    path: 'complaint-booking-failed-invalid-contact',
    component: ComplaintBookingFailedInvalidContactComponent,
  },
  {
    path: 'complaint-booking-failed',
    component: ComplaintBookingFailedComponent,
  },
  {
    path: 'router-reboot-successful',
    component: RouterRebootSuccessfulComponent,
  },
  {
    path: 'router-reset-successful',
    component: RouterResetSuccessfulComponent,
  },
  {
    path: 'server-timeout',
    component: ServerTimeOutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InternetRoutingModule {}
