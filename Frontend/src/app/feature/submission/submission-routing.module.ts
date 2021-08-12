import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from '../layout/default-layout/default-layout.component';
import { CounterPartyBankAccountHistoryComponent } from './counter-party-bank-account-history/counter-party-bank-account-history.component';
import { CounterPartyDetailComponent } from './counter-party-detail/counter-party-detail.component';
import { LandingComponent } from './landing/landing.component';
import { SubmissionDetailComponent } from './submission-detail/submission-detail.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'home',
        component: LandingComponent,
      },
      {
        path: 'submission',
        component: SubmissionDetailComponent,
      },
      {
        path: 'counter',
        component: CounterPartyDetailComponent,
      },
      {
        path: 'history',
        component: CounterPartyBankAccountHistoryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubmissionRoutingModule {}
