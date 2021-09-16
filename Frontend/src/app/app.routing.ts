import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { MessageBuilderComponent } from './message-builder/message-builder.component';
import { ThankyouScreenComponent } from './thankyou-screen/thankyou-screen.component';
import { TermsConditionsComponent } from './shared/components/terms-conditions/terms-conditions.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { BookComplaintComponent } from './shared/components/book-complaint/book-complaint.component';
import { IssueBuilderComponent } from './issue-builder/issue-builder.component';
import { RestartInstructionComponent } from './shared/components/restart-instruction/restart-instruction.component';
import { ResetInternetPasswordComponent } from './shared/components/reset-internet-password/reset-internet-password.component';
import { DeviceCareComponent } from './shared/components/device-care/device-care.component';
import { BrowserStepperComponent } from './shared/components/browser-stepper/browser-stepper.component';
import { UnableVideoCallsComponent } from './shared/components/unable-video-calls/unable-video-calls.component';
import { UnableConnectNewDeviceWifiComponent } from './shared/components/unable-connect-newDevice-wifi/unable-connect-newDevice-wifi.component';
import { ERoutingIds } from './shared/constants/constants';
import { ResetWifiPasswordComponent } from './shared/components/reset-wifi-password/reset-wifi-password.component';
import { ServiceDetailComponent } from './shared/components/service-detail/service-detail.component';
import { DeviceConnectedHomezoneComponent } from './shared/components/device-connected-homezone/device-connected-homezone.component';
import { TvDetailComponent } from './tv-detail/tv-detail.component';
import { GameSessionComponent } from './shared/components/game-session/game-session.component';
import { PackageAvailableComponent } from './shared/components/package-available/package-available.component';
import { TransferPackageComponent } from './shared/components/transfer-package/transfer-package.component';
import { UnableWatchSpecificChannelComponent } from './shared/components/unable-watch-specific-channel/unable-watch-specific-channel.component';
import { TabTileComponent } from './shared/components/tab-tile/tab-tile.component';
import { PhoneIssuesCareComponent } from './shared/components/phone-issues-care/phone-issues-care.component';
import { PhoneIssuesProblemValueAddedComponent } from './shared/components/phone-issues-problem-value-added/phone-issues-problem-value-added.component';
import { ForgotCcbPinComponent } from './shared/components/forgot-ccb-pin/forgot-ccb-pin.component';
import { ChangeCallForwardComponent } from './shared/components/change-call-forward/change-call-forward.component';
import { DummyDelComponent } from './shared/components/dummy-del/dummy-del.component';
import { PhoneIssueListDialogComponent } from './shared/dialogs/phone-issue-list-dialog/phone-issue-list-dialog.component';
import { ResetRouterPasswordComponent } from './shared/components/reset-router-password/reset-router-password.component';
import { ResetPinComponent } from './shared/components/reset-pin/reset-pin.component';

const routes: Routes = [
  // REFACTORED LOGIC
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
  // REFACTORED LOGIC
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'info',
    component: MessageBuilderComponent,
  },
  {
    path: 'thanks',
    component: ThankyouScreenComponent,
  },
  {
    path: 'terms',
    component: TermsConditionsComponent,
  },
  {
    path: 'loader',
    component: LoaderComponent,
  },
  {
    path: 'issue',
    component: IssueBuilderComponent,
  },
  // {
  //   path: 'router-restart',
  //   component: RestartInstructionComponent,
  //   data: { id: ERoutingIds.routerRestart },
  // },
  {
    path: 'reset-internet-password',
    component: ResetInternetPasswordComponent,
  },
  {
    path: 'device-care',
    component: DeviceCareComponent,
    data: { id: ERoutingIds.routerDeviceCare },
  },

  //Open Complaint
  { path: 'open-complaint', component: MessageBuilderComponent, data: { id: ERoutingIds.openComplaint } },
  //Open service request present
  { path: 'osrp', component: MessageBuilderComponent, data: { id: ERoutingIds.osrp } },
  //Appointment Successfully
  { path: 'appoinment-successfully', component: MessageBuilderComponent, data: { id: ERoutingIds.appoinmentSuccessfully } },

  //complaint Successfully
  { path: 'complaint-successfully', component: MessageBuilderComponent, data: { id: ERoutingIds.complaintSuccessfully } },

  //Open technical S/R
  { path: 'open-sr', component: MessageBuilderComponent, data: { id: ERoutingIds.openSr } },
  //package upgrade Successfully
  { path: 'package-upgrade-request-successfully', component: MessageBuilderComponent, data: { id: ERoutingIds.packageUpgradeRequestSuccessfully } },
  //Account not active
  { path: 'account-not-active', component: MessageBuilderComponent, data: { id: ERoutingIds.accountNotActive } },
  //Router upgrade Successfully
  { path: 'router-upgrade-request-successfully', component: MessageBuilderComponent, data: { id: ERoutingIds.routerUpgradeRequestSuccessfully } },
  //router and package upgrade Successfully
  { path: 'router-package-upgrade-request-successfully', component: MessageBuilderComponent, data: { id: ERoutingIds.routerPackageUpgradeRequestSuccessfully } },
  // 3rd party router Successfully
  { path: 'third-party-router-successfully', component: MessageBuilderComponent, data: { id: ERoutingIds.thirdPartyRouterSuccessfully } },
  // third party  router Successfully
  { path: 'troubleshoot-complete', component: MessageBuilderComponent, data: { id: ERoutingIds.troubleshootComplete } },
  // tv-pin-reset-successfull
  { path: 'tv-pin-reset-successfull', component: MessageBuilderComponent, data: { id: ERoutingIds.tvPinUpdateSuccessfull } },
  // rest ELife Login Pin
  { path: 'reset-login-pin', component: MessageBuilderComponent, data: { id: ERoutingIds.restELifeLoginPin } },
  // rest ELife Login Pin Success
  { path: 'reset-login-pin-success', component: MessageBuilderComponent, data: { id: ERoutingIds.restELifeLoginPinResetSuccess } },
  // Cancel Game Session Confirm
  { path: 'game-session-cancel', component: MessageBuilderComponent, data: { id: ERoutingIds.gameSessionCancelConfirmed } },

  //Router Reboot Required
  { path: 'router-reboot-required', component: IssueBuilderComponent, data: { id: ERoutingIds.routerRebootRequired } },
  //Issue Not Fixed
  { path: 'issue-not-fixed', component: IssueBuilderComponent, data: { id: ERoutingIds.issueNotFixed } },
  //Internet password reset required - 1122 - Module - 4
  { path: 'internet-password-reset', component: IssueBuilderComponent, data: { id: ERoutingIds.internetPasswordReset } },
  { path: 'internet-password-reset-success', component: MessageBuilderComponent, data: { id: ERoutingIds.resetInternetPasswordSuccess } },
  { path: 'internet-password-reset-error', component: MessageBuilderComponent, data: { id: ERoutingIds.resetInternetPasswordError } },
  { path: 'internet-password-reset-fail', component: MessageBuilderComponent, data: { id: ERoutingIds.tryAgainError } },
  { path: 'internet-password-reset-detail', component: MessageBuilderComponent, data: { id: ERoutingIds.resetInternetPasswordSuccessDetail } },

  // Reset Router Wi-Fi Password
  { path: 'reset-router-password', component: ResetRouterPasswordComponent, data: { id: ERoutingIds.resetRouterWifiPassword } },
  { path: 'reset-router-password-success', component: MessageBuilderComponent, data: { id: ERoutingIds.resetRouterWifiPasswordSuccess } },

  { path: 'unable-to-reach-router', component: MessageBuilderComponent, data: { id: ERoutingIds.unableToReachRouter } },
  { path: 'unable-to-reach-router-failed', component: MessageBuilderComponent, data: { id: ERoutingIds.unableToReachRouterFailed } },
  { path: 'unable-to-reset-password', component: MessageBuilderComponent, data: { id: ERoutingIds.unableToResetPassword } },
  { path: 'reset-tv-admin-pin', component: ResetPinComponent, data: { id: ERoutingIds.resetTvAdminPin } },
  { path: 'reset-eLifeON-pin', component: ResetPinComponent, data: { id: ERoutingIds.resetELifeONPin } },
  { path: 'unable-to-process-request', component: MessageBuilderComponent, data: { id: ERoutingIds.unableToProcessRequest } },
  { path: 'reset-ccb-pin', component: ForgotCcbPinComponent, data: { id: ERoutingIds.resetTelephoneCCBPIN } },
  // 1122 Module - 4 END

  //3rd party router requires configuration
  { path: '3rd-party-router-reset', component: IssueBuilderComponent, data: { id: ERoutingIds.RouterReset3rdParty } },
  //Package Upgrade Recommended
  { path: 'package-upgrade-recommended', component: IssueBuilderComponent, data: { id: ERoutingIds.packageUpgradeRecommended } },
  //Wi-Fi Alarm
  { path: 'wifi-alarm', component: IssueBuilderComponent, data: { id: ERoutingIds.WiFiAlarm } },
  //Outage
  { path: 'outage', component: IssueBuilderComponent, data: { id: ERoutingIds.outage } },

  //TV Outage
  { path: 'tv-outage', component: IssueBuilderComponent, data: { id: ERoutingIds.tvOutage } },
  //Router Upgrade Recommended
  { path: 'router-upgrade-recommended', component: IssueBuilderComponent, data: { id: ERoutingIds.routerUpgradeRecommended } },
  //Router & package upgrade recommended
  { path: 'router-package-upgrade-recommended', component: IssueBuilderComponent, data: { id: ERoutingIds.routerPackageUpgradeRecommended } },
  //No Issue
  { path: 'no-issue', component: IssueBuilderComponent, data: { id: ERoutingIds.noIssue } },
  // 3rd party router
  { path: 'third-party-router', component: IssueBuilderComponent, data: { id: ERoutingIds.thirdPartyRouter } },
  // no Issue  - TV
  { path: 'no-issue-tv', component: IssueBuilderComponent, data: { id: ERoutingIds.noIssueTv } },
  // no Issue  - TV
  { path: 'issue-not-fixed-tv', component: IssueBuilderComponent, data: { id: ERoutingIds.issueNotFixedTv } },

  //router and package Upgrade Recommended form
  { path: 'router-package-upgrade-recommended-form', component: BookComplaintComponent, data: { id: ERoutingIds.routerPackageUpgradeRecommendedForm } },
  //Router Upgrade Recommended form
  { path: 'router-upgrade-recommended-form', component: BookComplaintComponent, data: { id: ERoutingIds.routerUpgradeRecommendedForm } },
  //package-upgrade-recommended-form
  { path: 'package-upgrade-recommended-form', component: BookComplaintComponent, data: { id: ERoutingIds.packageUpgradeRecommendedForm } },
  // Book A Complaint
  { path: 'bookComplaint', component: BookComplaintComponent, data: { id: ERoutingIds.bookComplaint } },

  // Book A Complaint As Complaint message
  { path: 'book-Complaint', component: BookComplaintComponent, data: { id: ERoutingIds.bookComplaintAsComplaint } },

  // Book A Appointment As Appointment message
  { path: 'book-Appointment', component: BookComplaintComponent, data: { id: ERoutingIds.bookAppointmentAsAppointment } },

  // 3rd party router form
  { path: 'third-party-router-form', component: BookComplaintComponent, data: { id: ERoutingIds.thirdPartyRouterForm } },
  // #endregion  third party  router

  //Router Reset Required
  { path: 'reset-wifi-required', component: IssueBuilderComponent, data: { id: ERoutingIds.routerResetRequired } },
  { path: 'reset-wifi-password-success', component: MessageBuilderComponent, data: { id: ERoutingIds.resetWifiPasswordSuccess } },
  { path: 'reset-wifi-password-form', component: ResetWifiPasswordComponent, data: { id: ERoutingIds.resetWifiPasswordForm } },
  { path: 'reset-wifi-password-form_successfully', component: MessageBuilderComponent, data: { id: ERoutingIds.resetWifiPasswordFormSuccessfully } },

  //Router managed, but not reachable
  { path: 'router-not-reachable', component: IssueBuilderComponent, data: { id: ERoutingIds.routerNotReachable } },
  { path: 'router-not-reachable-form', component: BookComplaintComponent, data: { id: ERoutingIds.routerNotReachableForm } },
  { path: 'router-not-reachable-form_successfully', component: MessageBuilderComponent, data: { id: ERoutingIds.routerNotReachableFormSuccessfully } },
  { path: 'router-not-reachable-own-router', component: IssueBuilderComponent, data: { id: ERoutingIds.routerNotReachableOwnRouter } },
  { path: 'router-not-reachable-own-router-care', component: DeviceCareComponent, data: { id: ERoutingIds.routerNotReachableOwnRouterCare } },

  //TV Box Not Reachable
  { path: 'tvBox-not-reachable', component: IssueBuilderComponent, data: { id: ERoutingIds.tvBoxNotReachable } },
  { path: 'tvBox-not-reachable_try_again', component: IssueBuilderComponent, data: { id: ERoutingIds.tvBoxNotReachableTryAgain } },
  { path: 'tvBox-not-reachable-form', component: BookComplaintComponent, data: { id: ERoutingIds.tvBoxNotReachableForm } },
  { path: 'tvBox-not-reachable-form_successfully', component: MessageBuilderComponent, data: { id: ERoutingIds.tvBoxNotReachableFormSuccessfully } },

  //TV set top box restart required
  { path: 'tvBox-restart-required', component: IssueBuilderComponent, data: { id: ERoutingIds.tvBoxRestartRequired } },
  { path: 'tvBox-restart-required-successfully', component: MessageBuilderComponent, data: { id: ERoutingIds.tvBoxRestartRequiredSuccessfully } },
  { path: 'tvBox-restart-required-manually', component: RestartInstructionComponent, data: { id: ERoutingIds.tvBoxRestartRequiredManually } },
  { path: 'tvBox-restart-required-device-care', component: DeviceCareComponent, data: { id: ERoutingIds.tvBoxRestartRequiredDeviceCare } },

  { path: 'browser-stapper', component: BrowserStepperComponent },
  { path: 'unable-video-call', component: UnableVideoCallsComponent },
  { path: 'unable-connect-newDevice', component: UnableConnectNewDeviceWifiComponent },
  { path: 'service-detail', component: ServiceDetailComponent },
  { path: 'tv-details', component: TvDetailComponent },
  { path: 'device-connected-homezone', component: DeviceConnectedHomezoneComponent },
  { path: 'game-session', component: GameSessionComponent },

  //Unable to watch channel
  { path: 'unable-to-watch-channel', component: IssueBuilderComponent, data: { id: ERoutingIds.enableWatchChannel } },
  { path: 'unable-to-watch-channel-continue', component: DeviceCareComponent, data: { id: ERoutingIds.enableWatchChannelContinueTroubleshoot } },
  { path: 'tvBox-reset-successfull', component: MessageBuilderComponent, data: { id: ERoutingIds.tvBoxResetSuccessfully } },

  // Package Transfer
  { path: 'package-available', component: PackageAvailableComponent, data: { id: ERoutingIds.packageavailable } },
  { path: 'package-transfer', component: TransferPackageComponent, data: { id: ERoutingIds.packagetransfer } },
  { path: 'package-transfer-success', component: MessageBuilderComponent, data: { id: ERoutingIds.packageTransferSuccess } },
  //Unable to watch specific channel
  { path: 'unable-to-watch-specific-channel', component: UnableWatchSpecificChannelComponent, data: { id: ERoutingIds.enableWatchSpecificChannel } },
  { path: 'unable-to-watch-package-available', component: PackageAvailableComponent, data: { id: ERoutingIds.enableWatchSpecificChannelpackageavailable } },
  { path: 'unable-to-watch-package-transfer', component: TransferPackageComponent, data: { id: ERoutingIds.enableWatchSpecificChannelpackageTransfer } },
  { path: 'unable-to-watch-package-transfer-success', component: MessageBuilderComponent, data: { id: ERoutingIds.enableWatchSpecificChannelpackageTransferSuccess } },

  { path: 'no-issue-phone', component: IssueBuilderComponent, data: { id: ERoutingIds.noIssuePhone } },
  { path: 'no-issue-phone-unable-calls', component: PhoneIssuesCareComponent, data: { id: ERoutingIds.noIssuePhoneUnablePhoneCalls } },
  { path: 'no-issue-phone-no-dial-tone', component: PhoneIssuesCareComponent, data: { id: ERoutingIds.noIssuePhoneNoDialTone } },

  { path: 'no-issue-phone-value-added', component: PhoneIssuesProblemValueAddedComponent, data: { id: ERoutingIds.noIssuePhoneProblemValueAdded } },
  { path: 'no-issue-phone-reset-ccb-pin', component: ForgotCcbPinComponent, data: { id: ERoutingIds.noIssuePhoneResetCCBPin } },
  { path: 'no-issue-phone-phone-reset-ccb-pin-successfully', component: MessageBuilderComponent, data: { id: ERoutingIds.noIssuePhoneResetCCBPinSuccessfully } },
  { path: 'no-issue-phone-phone-reset-ccb-pin-successfully', component: MessageBuilderComponent, data: { id: ERoutingIds.noIssuePhoneResetCCBPinSuccessfully } },
  { path: 'no-issue-phone-phone-Change-call-forward', component: ChangeCallForwardComponent, data: { id: ERoutingIds.noIssuePhoneChangeCallForward } },
  { path: 'no-issue-phone-phone-Change-call-forward-successfully', component: MessageBuilderComponent, data: { id: ERoutingIds.noIssuePhoneChangeCallForwardSuccessfully } },

  { path: 'DummyDel', component: DummyDelComponent, data: { id: ERoutingIds.noIssuePhone } },
  { path: 'phone-issue-list-dialog', component: PhoneIssueListDialogComponent, data: { id: ERoutingIds.noIssuePhone } },

  //Ont reboot required
  { path: 'ont-restart-required', component: IssueBuilderComponent, data: { id: ERoutingIds.ontRestartRequired } },
  { path: 'ont-restart-required-successfully', component: MessageBuilderComponent, data: { id: ERoutingIds.ontRestartRequiredSuccessfully } },
  { path: 'ont-restart-required-manually', component: RestartInstructionComponent, data: { id: ERoutingIds.ontRestartRequiredManually } },
  { path: 'ont-restart-required-device-care', component: DeviceCareComponent, data: { id: ERoutingIds.ontRestartRequiredDeviceCare } },

  { path: 'issue-not-fixed-phone', component: IssueBuilderComponent, data: { id: ERoutingIds.issueNotFixedPhone } },

  //pHONE Outage
  { path: 'phone-outage', component: IssueBuilderComponent, data: { id: ERoutingIds.phoneOutage } },
  // For Demo
  { path: 'tab-tiles', component: TabTileComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class RoutingModule {}
