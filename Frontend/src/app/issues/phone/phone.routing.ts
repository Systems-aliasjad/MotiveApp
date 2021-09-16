import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallForwardMessageComponent } from './routes/call-forward-message.component';
import { ChangeCallForwardSuccessComponent } from './routes/change-call-forward-success.component';
import { ForgotCcbPinMessageComponent } from './routes/forgot-ccb-pin-message-component';
import { IssueNotFixedMessageComponent } from './routes/issue-not-fixed-message.component';
import { IssueNotFixedComponent } from './routes/issue-not-fixed.component';

import { MainComponent } from './routes/main.component';
import { NoIssuesComponent } from './routes/no-issues.component';
import { OntNotRestartInstructionsComponent } from './routes/ont-not-restart-instructions.component';
import { OntRebootMessageComponent } from './routes/ont-reboot-message.component';
import { OntRebootComponent } from './routes/ont-reboot.component';
import { OntRestartInstructionsComponent } from './routes/ont-restart-instructions.component';
import { OntRestartSuccessComponent } from './routes/ont-restart-success.component';
import { OutageMessageComponent } from './routes/outage-message.component';
import { OutageComponent } from './routes/outage.component';
import { ResetCCBPINSuccessComponent } from './routes/reset-ccb-pin-success.component';

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
    path: 'outage-message',
    component: OutageMessageComponent,
  },
  {
    //Issue not fixed
    path: 'issue-not-fixed',
    component: IssueNotFixedComponent,
  },
  {
    //Issue not fixed
    path: 'issue-not-fixed-message',
    component: IssueNotFixedMessageComponent,
  },
  {
    path: 'ont-reboot',
    component: OntRebootComponent,
  },
  {
    path: 'ont-reboot-message',
    component: OntRebootMessageComponent,
  },

  {
    path: 'call-forward-message',
    component: CallForwardMessageComponent,
  },

  {
    path: 'forgot-ccb-pin-message',
    component: ForgotCcbPinMessageComponent,
  },

  {
    //No ussues or issue fixed
    path: 'no-issues',
    component: NoIssuesComponent,
  },
  {
    //ont reboot manually instructions
    path: 'ont-restart-instructions',
    component: OntRestartInstructionsComponent,
  },
  {
    //ont not reboot manually instructions
    path: 'ont-not-restart-instructions',
    component: OntNotRestartInstructionsComponent,
  },
  {
    path: 'ont-restart-required-successfully',
    component: OntRestartSuccessComponent,
  },
  {
    path: 'no-issue-phone-phone-Change-call-forward-successfully',
    component: ChangeCallForwardSuccessComponent,
  },
  {
    path: 'no-issue-phone-phone-reset-ccb-pin-successfully',
    component: ResetCCBPINSuccessComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhoneRoutingModule {}
