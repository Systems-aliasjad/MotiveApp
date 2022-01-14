import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiberBoxNotReachableTryAgainComponent } from 'src/app/shared/components/fiber-box-not-reachable-try-again.component';
import { AccountIdComponent } from './routes/account-id/account-id.component';
import { ComplaintExistsMessageComponent } from './routes/complaint-exists-messgae.component';
import { CustomerNotSameRouterComponent } from './routes/customer-not-same-router.component';
import { FiberBoxNotReachableComponent } from './routes/fiber-box-not-reachable-message.component';
import { InternetPasswordResetComponent } from './routes/internet-password-reset.component';
import { IssueNotFixedComponent } from './routes/issue-not-fixed.component';
import { MainComponent } from './routes/main.component';
import { NoIssuesServiceDetailsComponent } from './routes/no-issues-service-details/no-issues-service-details.component';
import { NoIssuesComponent } from './routes/no-issues.component';
import { OpenServiceRequestMessageComponent } from './routes/open-service-request-message.component';
import { OutageComponent } from './routes/outage.component';
import { ResetPinFailedMessageComponent } from './routes/reset-pin-failed-message.component';
import { RouterNotReachableComponent } from './routes/router-not-reachable.component';
import { RouterRebootRequiredComponent } from './routes/router-reboot-required.component';
import { RouterResetRequiredComponent } from './routes/router-reset-required.component';

const routes: Routes = [
  {
    path: 'account-id',
    component: AccountIdComponent,
  },

  {
    path: '',
    component: MainComponent,
  },
  // {  // this should be in Quick Links
  //   path: 'reset-pin-failed',
  //   component: ResetPinFailedMessageComponent,
  // },
  // {
  //   path: 'fiber-box-not-reachable',
  //   component: FiberBoxNotReachableComponent,
  // },
  {
    path: 'customer-not-using-same-router',
    component: CustomerNotSameRouterComponent,
  },
  {
    path: 'outage',
    component: OutageComponent,
  },
  {
    path: 'router-reset-required',
    component: RouterResetRequiredComponent,
  },
  {
    path: 'internet-password-reset',
    component: InternetPasswordResetComponent,
  },
  {
    path: 'no-issue',
    component: NoIssuesComponent,
  },
  {
    path: 'issue-not-fixed',
    component: IssueNotFixedComponent,
  },
  {
    path: 'service-detail',
    component: NoIssuesServiceDetailsComponent,
  },
  {
    path: 'router-reboot-required',
    component: RouterRebootRequiredComponent,
  },
  {
    path: 'router-not-reachable',
    component: RouterNotReachableComponent,
  },

  {
    path: 'complaint-already-exists',
    component: ComplaintExistsMessageComponent,
  },
  {
    path: 'fiber-box-not-reachable',
    component: FiberBoxNotReachableComponent,
  },
  {
    path:'common/fiber-box-not-reachable-try-again',
    component: FiberBoxNotReachableTryAgainComponent,
  },
   {
    path: 'open-technical-request',
    component: OpenServiceRequestMessageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherRoutingModule {}
