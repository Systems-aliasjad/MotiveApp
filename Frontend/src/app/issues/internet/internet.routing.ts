import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThirdPartyRouterResetComponent } from './routes/3rd-party-router-reset.component';
import { ThirdPartyRouterComponent } from './routes/3rd-party-router.component';
import { PasswordResetComponent } from './routes/password-reset.component';

import { MainComponent } from './routes/main.component';
import { NoIssuesComponent } from './routes/no-issues.component';
import { OSRPComponent } from './routes/osrp.component';
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
import { InstallNewRouterMessageComponent } from './routes/install-new-router-message.component';
import { RouterInstallSuccessfullyMessageComponent } from './routes/router-install-successfully-message.component';
import { RoutingPaths } from 'src/app/shared/constants/constants';
import { RouterInstallationFailedMessageComponent } from './routes/router-installation-failed-message.component';
import { RouterResetFactoryComponent } from './routes/router-reset-factory.component';
import { BookComplaintComponent } from 'src/app/shared/components/book-complaint/book-complaint.component';
import { ERoutingIds } from 'src/app/shared/constants/constants';
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
    path: 'unable-to-browse-internet/step3',
    component: BrowsingUnableStep3Component,
  },
  {
    path: 'router-restart/device-care',
    component: RouterRestartCareComponent,
  },
  {
    path: 'outage',
    component: OutageComponent,
  },
  {
    path: 'osrp',
    component: OSRPComponent,
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
    path: 'book-complaint',
    component: BookComplaintComponent,
    data: { id: ERoutingIds.routerUpgrade },
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

    path: 'install-new-router-flow2',
    component: InstallNewRouterFlow2MessageComponent,
  },

  {
    //quick links
    //I want to install my new router
    //Flow 4 Message

    path: 'install-new-router-flow4',
    component: InstallNewRouterFlow4MessageComponent,
  },

  {
    //quick links
    //I want to install my new router
    //
    path: 'install-new-router-reset-internet-password',
    component: InstallNewRouterResetInternetPasswordComponent,
  },

  {
    //Router upgrade Request Successfully
    path: 'router-upgrade-success',
    component: RouterUpgradeSuccessComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InternetRoutingModule {}
