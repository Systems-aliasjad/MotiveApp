import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ThankyouScreenComponent } from './shared/components/thankyou-screen/thankyou-screen.component';
import { TermsConditionsComponent } from './shared/components/terms-conditions/terms-conditions.component';
import { LoaderComponent } from './loader/loader.component';
import { BookComplaintComponent } from './shared/components/book-complaint/book-complaint.component';
import { RestartInstructionComponent } from './shared/components/restart-instruction/restart-instruction.component';
import { DeviceCareComponent } from './shared/components/device-care/device-care.component';
// import { UnableVideoCallsComponent } from './shared/components/unable-video-calls/unable-video-calls.component';
// import { UnableConnectNewDeviceWifiComponent } from './shared/components/unable-connect-newDevice-wifi/unable-connect-newDevice-wifi.component';
import { ERoutingIds } from './shared/constants/constants';
// import { ResetWifiPasswordComponent } from './shared/components/reset-wifi-password/reset-wifi-password.component';
// import { PackageAvailableComponent } from './shared/components/package-available/package-available.component';
// import { TransferPackageComponent } from './shared/components/transfer-package/transfer-package.component';
// import { UnableWatchSpecificChannelComponent } from './issues/tv/routes/unable-watch-specific-channel/unable-watch-specific-channel.component';
import { TabTileComponent } from './shared/components/tab-tile/tab-tile.component';
// import { PhoneIssuesProblemValueAddedComponent } from './issues/phone/routes/phone-issues-problem-value-added/phone-issues-problem-value-added.component';
// import { ResetRouterPasswordComponent } from './shared/components/reset-router-password/reset-router-password.component';
import { ResetPinComponent } from './shared/components/reset-pin/reset-pin.component';
import { QuickLinksAllComponent } from './quick-links-all/quick-links-all.component';
import { EIssueFlow, IssueListDialog } from './shared/dialogs/issue-list-dialog/issue-list-dialog.component';
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
  {
    path: 'track-complaint',
    loadChildren: () => import('./common-quick-links/track-complaint/track-complaint.module').then((m) => m.TrackComplaintModule),
  },
  {
    path: 'track-request',
    loadChildren: () => import('./common-quick-links/track-request/track-request.module').then((m) => m.TrackRequestModule),
  },

  {
    path: 'all-links',
    loadChildren: () => import('./all-services/all-services.module').then((m) => m.AllServicesModule),
  },

  // REFACTORED LOGIC
  {
    path: 'landing',
    component: LandingComponent,
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
  // {
  //   path: 'router-restart',
  //   component: RestartInstructionComponent,
  //   data: { id: ERoutingIds.routerRestart },
  // },
  // {
  //   path: 'reset-internet-password',
  //   component: ResetInternetPasswordComponent,
  // },
  // {
  //   path: 'reset-internet-password',
  //   component: ResetInternetPasswordComponent,
  // },
  {
    path: 'device-care',
    component: DeviceCareComponent,
    data: { id: ERoutingIds.routerDeviceCare },
  },

  // Reset Router Wi-Fi Password
  // { path: 'reset-router-password', component: ResetRouterPasswordComponent, data: { id: ERoutingIds.resetRouterWifiPassword } },
  { path: 'reset-tv-admin-pin', component: ResetPinComponent, data: { id: ERoutingIds.resetTvAdminPin } },
  { path: 'reset-eLifeON-pin', component: ResetPinComponent, data: { id: ERoutingIds.resetELifeONPin } },
  // 1122 Module - 4 END

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

  // 3rd party router form -
  { path: 'third-party-router-form', component: BookComplaintComponent, data: { id: ERoutingIds.thirdPartyRouterForm } },
  // #endregion  third party  router

  //Router Reset Required
  // { path: 'reset-wifi-password-form', component: ResetWifiPasswordComponent, data: { id: ERoutingIds.resetWifiPasswordForm } },

  //Router managed, but not reachable
  { path: 'router-not-reachable-form', component: BookComplaintComponent, data: { id: ERoutingIds.routerNotReachableForm } },
  { path: 'router-not-reachable-own-router-care', component: DeviceCareComponent, data: { id: ERoutingIds.routerNotReachableOwnRouterCare } },

  //TV Box Not Reachable
  { path: 'tvBox-not-reachable-form', component: BookComplaintComponent, data: { id: ERoutingIds.tvBoxNotReachableForm } },

  //TV set top box restart required
  { path: 'tvBox-restart-required-manually', component: RestartInstructionComponent, data: { id: ERoutingIds.tvBoxRestartRequiredManually } },
  { path: 'tvBox-restart-required-device-care', component: DeviceCareComponent, data: { id: ERoutingIds.tvBoxRestartRequiredDeviceCare } },

  // { path: 'unable-video-call', component: UnableVideoCallsComponent },
  // { path: 'unable-connect-newDevice', component: UnableConnectNewDeviceWifiComponent },

  // Package Transfer
  // { path: 'package-available', component: PackageAvailableComponent, data: { id: ERoutingIds.packageavailable } },
  // { path: 'package-transfer', component: TransferPackageComponent, data: { id: ERoutingIds.packagetransfer } },
  //Unable to watch specific channel
  // { path: 'unable-to-watch-specific-channel', component: UnableWatchSpecificChannelComponent, data: { id: ERoutingIds.enableWatchSpecificChannel } },
  // { path: 'unable-to-watch-package-available', component: PackageAvailableComponent, data: { id: ERoutingIds.enableWatchSpecificChannelpackageavailable } },
  // { path: 'unable-to-watch-package-transfer', component: TransferPackageComponent, data: { id: ERoutingIds.enableWatchSpecificChannelpackageTransfer } },
  // { path: 'no-issue-phone-value-added', component: PhoneIssuesProblemValueAddedComponent, data: { id: ERoutingIds.noIssuePhoneProblemValueAdded } },
  { path: 'phone-issue-list-dialog', component: IssueListDialog, data: { id: EIssueFlow.phoneIssue } },

  //Ont reboot required
  { path: 'ont-restart-required-manually', component: RestartInstructionComponent, data: { id: ERoutingIds.ontRestartRequiredManually } },
  { path: 'ont-restart-required-device-care', component: DeviceCareComponent, data: { id: ERoutingIds.ontRestartRequiredDeviceCare } },

  //Quick Links all
  { path: 'quick-links-all', component: QuickLinksAllComponent, data: { id: ERoutingIds.quickLinksAll } },
  // { path: '', component: TransferPackageComponent, data: { id: ERoutingIds.packagetransfer } },

  { path: 'install-new-router-reset-internet-password', component: ResetPinComponent, data: { id: ERoutingIds.installNewRouterResetInternetPassword } },

  /////All Services

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
