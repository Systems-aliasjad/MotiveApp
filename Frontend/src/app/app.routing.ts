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
import { RouterRestartComponent } from './shared/components/router-restart/router-restart.component';
import { ResetInternetPasswordComponent } from './shared/components/reset-internet-password/reset-internet-password.component';
import { DeviceCareComponent } from './shared/components/device-care/device-care.component';
import { InternetIssueListDialog } from './shared/dialogs/internet-issue-list-dialog/internet-issue-list-dialog.component';
import { BrowserStepperComponent } from './shared/components/browser-stepper/browser-stepper.component';
import { UnableVideoCallsComponent } from './shared/components/unable-video-calls/unable-video-calls.component';
import { UnableConnectNewDeviceWifiComponent } from './shared/components/unable-connect-newDevice-wifi/unable-connect-newDevice-wifi.component';
import { ERoutingIds } from './shared/constants/constants';
import { ResetWifiPasswordComponent } from './shared/components/reset-wifi-password/reset-wifi-password.component';
import { ServiceDetailComponent } from './shared/components/service-detail/service-detail.component';
import { DeviceConnectedHomezoneComponent } from './shared/components/device-connected-homezone/device-connected-homezone.component';

const routes: Routes = [
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
  {
    path: 'router-restart',
    component: RouterRestartComponent,
  },
  {
    path: 'reset-internet-password',
    component: ResetInternetPasswordComponent,
  },
  {
    path: 'device-care',
    component: DeviceCareComponent,
  },

  //Open Complaint
  { path: 'open-complaint', component: MessageBuilderComponent, data: { id: ERoutingIds.openComplaint } },
  //Open service request present
  { path: 'osrp', component: MessageBuilderComponent, data: { id: ERoutingIds.osrp } },
  //Appointment Successfully
  { path: 'appoinment-successfully', component: MessageBuilderComponent, data: { id: ERoutingIds.appoinmentSuccessfully } },
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
  // third party  router Successfully
  { path: 'third-party-router-successfully', component: MessageBuilderComponent, data: { id: ERoutingIds.thirdPartyRouterSuccessfully } },

  //Router Reset Required
  { path: 'router-reset-required', component: IssueBuilderComponent, data: { id: ERoutingIds.routerResetRequired } },
  //Router Reboot Required
  { path: 'router-reboot-required', component: IssueBuilderComponent, data: { id: ERoutingIds.routerRebootRequired } },
  //Issue Not Fixed
  { path: 'issue-not-fixed', component: IssueBuilderComponent, data: { id: ERoutingIds.issueNotFixed } },
  //Internet Reset Password
  { path: 'internet-password-reset', component: IssueBuilderComponent, data: { id: ERoutingIds.internetPasswordReset } },
  //3rd party router requires configuration
  { path: '3rd-party-router-reset', component: IssueBuilderComponent, data: { id: ERoutingIds.RouterReset3rdParty } },
  //Package Upgrade Recommended
  { path: 'package-upgrade-recommended', component: IssueBuilderComponent, data: { id: ERoutingIds.packageUpgradeRecommended } },
  //Wi-Fi Alarm
  { path: 'wifi-alarm', component: IssueBuilderComponent, data: { id: ERoutingIds.WiFiAlarm } },
  //Outage
  { path: 'outage', component: IssueBuilderComponent, data: { id: ERoutingIds.outage } },
  //Router Upgrade Recommended
  { path: 'router-upgrade-recommended', component: IssueBuilderComponent, data: { id: ERoutingIds.routerUpgradeRecommended } },
  //router and package Upgrade Recommended
  { path: 'router-package-upgrade-recommended', component: IssueBuilderComponent, data: { id: ERoutingIds.routerPackageUpgradeRecommended } },
  //region No Issue
  { path: 'no-issue', component: IssueBuilderComponent, data: { id: ERoutingIds.noIssue } },
  // third party  router Recommended
  { path: 'third-party-router', component: IssueBuilderComponent, data: { id: ERoutingIds.thirdPartyRouter } },

  //router and package Upgrade Recommended form
  { path: 'router-package-upgrade-recommended-form', component: BookComplaintComponent, data: { id: ERoutingIds.routerPackageUpgradeRecommendedForm } },
  //Router Upgrade Recommended form
  { path: 'router-upgrade-recommended-form', component: BookComplaintComponent, data: { id: ERoutingIds.routerUpgradeRecommendedForm } },
  //package-upgrade-recommended-form
  { path: 'package-upgrade-recommended-form', component: BookComplaintComponent, data: { id: ERoutingIds.packageUpgradeRecommendedForm } },
  // Book A Complaint
  { path: 'bookComplaint', component: BookComplaintComponent, data: { id: ERoutingIds.bookComplaint } },
  // third party  router Recommended form
  { path: 'third-party-router-form', component: BookComplaintComponent, data: { id: ERoutingIds.thirdPartyRouterForm } },
  // #endregion  third party  router

  //#region  Reset Wifi Password
  { path: 'reset-wifi-password-form', component: ResetWifiPasswordComponent, data: { id: ERoutingIds.resetWifiPasswordForm } },
  //#endregion Reset Wifi Password

  { path: 'browser-stapper', component: BrowserStepperComponent },
  { path: 'unable-video-call', component: UnableVideoCallsComponent },
  { path: 'unable-connect-newDevice', component: UnableConnectNewDeviceWifiComponent },
  { path: 'dialog-demo', component: InternetIssueListDialog },
  { path: 'service-detail', component: ServiceDetailComponent },
  { path: 'device-connected-homezone', component: DeviceConnectedHomezoneComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class RoutingModule {}
