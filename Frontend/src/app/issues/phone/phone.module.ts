import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhoneRoutingModule } from './phone.routing';
import { MainComponent } from './routes/main.component';
import { SharedModule } from '../../shared/shared.module';
import { OutageComponent } from './routes/outage.component';
import { IssueNotFixedComponent } from './routes/issue-not-fixed.component';
import { OntRebootComponent } from './routes/ont-reboot.component';
import { NoIssuesComponent } from './routes/no-issues.component';
import { OutageMessageComponent } from './routes/outage-message.component';
import { IssueNotFixedMessageComponent } from './routes/issue-not-fixed-message.component';
import { OntRebootMessageComponent } from './routes/ont-reboot-message.component';
import { CallForwardMessageComponent } from './routes/call-forward-message.component';
import { ForgotCcbPinMessageComponent } from './routes/forgot-ccb-pin-message-component';

@NgModule({
  declarations: [
    MainComponent,
    OutageComponent,
    IssueNotFixedComponent,
    OntRebootComponent,
    NoIssuesComponent,
    OutageMessageComponent,
    IssueNotFixedMessageComponent,
    OntRebootMessageComponent,
    CallForwardMessageComponent,
    ForgotCcbPinMessageComponent,
  ],
  imports: [CommonModule, PhoneRoutingModule, SharedModule],
})
export class PhoneModule {}
