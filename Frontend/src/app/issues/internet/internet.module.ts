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
import { InternetPasswordResetComponent } from './routes/internet-password-reset.component';
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
import { RouterRestartComponent } from './routes/router-restart.component';

@NgModule({
  declarations: [
    MainComponent,
    OutageComponent,
    OSRPComponent,
    RouterNotRestartedComponent,
    RouterRestartComponent,
    RouterRebootRequiredComponent,
    RouterResetRequiredComponent,
    IssueNotFixedComponent,
    InternetPasswordResetComponent,
    ThirdPartyRouterResetComponent,
    PackageUpgradeRecommendedComponent,
    RouterUpgradeRecommendedComponent,
    WifiAlarmComponent,
    RouterPackageUpgradeRecommendedComponent,
    ThirdPartyRouterComponent,
    RouterNotReachableComponent,
    RouterNotReachableOwnRouterComponent,
    NoIssuesComponent,
  ],
  imports: [CommonModule, InternetRoutingModule, SharedModule],
})
export class InternetModule {}
