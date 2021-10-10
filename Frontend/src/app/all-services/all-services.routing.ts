import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CustomerNotSameRouterComponent } from './routes/customer-not-same-router.component';
import { FiberBoxNotReachableComponent } from './routes/fiber-box-not-reachable-message.component';
import { IssueNotFixedComponent } from './routes/issue-not-fixed.component';
import { NoIssuesServiceDetailsComponent } from './routes/no-issues-service-details/no-issues-service-details.component';
import { OntRebootRequiredInternetComponent } from './routes/ont-reboot-required-internet.component';
import { OntRebootRequiredTvComponent } from './routes/ont-reboot-required-tv.component';
import { OutageComponent } from './routes/outage.component';
import { PhoneNotReachableComponent } from './routes/phone-not-reachable.component';
import { ResetPinFailedMessageComponent } from './routes/reset-pin-failed-message.component';
import { RouterRebootRequiredComponent } from './routes/router-reboot-required.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: MainComponent,
  // },

  { path: 'reset-pin-failed', component: ResetPinFailedMessageComponent },
  { path: 'fiber-box-not-reachable', component: FiberBoxNotReachableComponent },
  { path: 'phone-not-reachable', component: PhoneNotReachableComponent },
  { path: 'ont-reboot-required-tv', component: OntRebootRequiredTvComponent },
  { path: 'ont-reboot-required-internet', component: OntRebootRequiredInternetComponent },
  { path: 'customer-not-using-same-router', component: CustomerNotSameRouterComponent },
  { path: 'outage', component: OutageComponent },
  { path: 'issue-not-fixed', component: IssueNotFixedComponent },
  { path: 'no-issues-service-details', component: NoIssuesServiceDetailsComponent },
  { path: 'router-reboot-required', component: RouterRebootRequiredComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class AllServicesRoutingModule {}
