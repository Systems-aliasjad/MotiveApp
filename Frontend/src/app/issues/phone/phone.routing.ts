import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueNotFixedComponent } from './routes/issue-not-fixed.component';

import { MainComponent } from './routes/main.component';
import { NoIssuesComponent } from './routes/no-issues.component';
import { OntRebootComponent } from './routes/ont-reboot.component';
import { OutageComponent } from './routes/outage.component';

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
    path: 'issue-not-fixed',
    component: IssueNotFixedComponent,
  },
  {
    path: 'ont-reboot',
    component: OntRebootComponent,
  },

  {
    //No ussues or issue fixed
    path: 'no-issues',
    component: NoIssuesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhoneRoutingModule {}
