import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhoneRoutingModule } from './phone.routing';
import { MainComponent } from './routes/main.component';
import { SharedModule } from '../../shared/shared.module';
import { OutageComponent } from './routes/outage.component';
import { IssueNotFixedComponent } from './routes/issue-not-fixed.component';
import { OntRebootComponent } from './routes/ont-reboot.component';
import { NoIssuesComponent } from './routes/no-issues.component';

@NgModule({
  declarations: [MainComponent, OutageComponent, IssueNotFixedComponent, OntRebootComponent, NoIssuesComponent],
  imports: [CommonModule, PhoneRoutingModule, SharedModule],
})
export class PhoneModule {}
