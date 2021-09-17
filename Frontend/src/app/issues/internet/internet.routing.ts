import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThirdPartyRouterResetComponent } from './routes/3rd-party-router-reset.component';
import { ThirdPartyRouterComponent } from './routes/3rd-party-router.component';
import { InternetPasswordResetComponent } from './routes/internet-password-reset.component';

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
import { InstallNewRouterMessageComponent } from './routes/install-new-router-message.component';
import { RouterInstallSuccessfullyMessageComponent } from './routes/router-install-successfully-message.component';
import { RoutingPaths } from 'src/app/shared/constants/constants';
import { RouterInstallationFailedMessageComponent } from './routes/router-installation-failed-message.component';
import { RouterResetFactoryComponent } from './routes/router-reset-factory.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
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
    component: InternetPasswordResetComponent,
  },

  {
    //3rd party router requires configuration
    path: '3rd-party-router-reset',
    component: ThirdPartyRouterResetComponent,
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InternetRoutingModule {}
