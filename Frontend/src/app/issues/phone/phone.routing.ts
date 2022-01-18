import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallForwardMessageComponent } from './routes/call-forward-message.component';
import { ChangeCallForwardSuccessComponent } from './routes/change-call-forward-success.component';
import { ForgotCcbPinMessageComponent } from './routes/forgot-ccb-pin-message.component';
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
import { NoDailToneCareComponent } from './routes/no-dial-tone-care.component';
import { UnableToCallCareComponent } from './routes/unable-to-call-care.component';
import { BookComplaintComponent } from './routes/book-complaint.component';
import { BookAppointmentComponent } from './routes/book-appointment.component';
import { ChangeCallForwardComponent } from './routes/change-call-forward/change-call-forward.component';
import { ForgotCcbPinComponent } from './routes/forgot-ccb-pin.component';
import { PhoneIssuesProblemValueAddedComponent } from './routes/phone-issues-problem-value-added/phone-issues-problem-value-added.component';
import { ForgotCcbPinFailedMessageComponent } from './routes/forgot-ccb-pin-failed-message.component';
import { CallForwardFailedMessageComponent } from './routes/call-forward-failed-message.component';
import { MoveElifeConnectionMessageComponent } from './routes/move-elife-connection-message.component';
import { CancelElifeConnectionMessageComponent } from './routes/cancel-elife-connection-message.component';
import { AccountTemporarilyDisconnectedMessageComponent } from './routes/account-temporarily-disconnected-message.component';
import { AppointmentSuccessfulMessageComponent } from './routes/appointment-successful-message.component';
import { FiberBoxRestartCareComponent } from './routes/fiber-box-restart-care.component';
import { PhoneNotReachableComponent } from './routes/phone-not-reachable.component';
import { FiberBoxNotReachableComponent } from './routes/fiber-box-not-reachable-message.component';
import { ResetCcbTryAgainErrorComponent } from './routes/reset-ccb-try-again-error.component';
import { UnableProcessResetCcbErrorComponent } from './routes/unable-process-reset-ccb-try-again-error.component';
import { RebootConfirmDialogComponent } from './routes/dialogs/reboot-confirm-dialog/reboot-confirm-dialog.component';
import { ComplaintExistsMessageComponent } from './routes/complaint-exists-messgae.component';
import { FiberBoxNotReachableTryAgainComponent } from 'src/app/shared/components/fiber-box-not-reachable-try-again.component';
import { PhoneNotReachableFirstTimeComponent } from './routes/phone-not-reachable-first-time.component';
import { OpenServiceRequestMessageComponent } from './routes/open-service-request-message.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'osrp/move-elife-connection',
    component: MoveElifeConnectionMessageComponent,
  },
  {
    path: 'osrp/cancel-elife-connection',
    component: CancelElifeConnectionMessageComponent,
  },
  {
    path: 'osrp/account-temporarily-disconnected',
    component: AccountTemporarilyDisconnectedMessageComponent,
  },
  {
    path: 'phone-not-reachable',
    component: PhoneNotReachableComponent,
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
    path: 'no-dail-tone/device-care',
    component: NoDailToneCareComponent,
  },
  {
    path: 'unable-to-call/device-care',
    component: UnableToCallCareComponent,
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
    path: 'call-forward-failed-message',
    component: CallForwardFailedMessageComponent,
  },

  {
    path: 'forgot-ccb-pin-message',
    component: ForgotCcbPinMessageComponent,
  },
  {
    path: 'forgot-ccb-pin-failed-message',
    component: ForgotCcbPinFailedMessageComponent,
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
    path: 'ont-restart-instructions/device-care',
    component: FiberBoxRestartCareComponent,
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
    path: 'no-issue-phone-phone-Change-call-forward',
    component: ChangeCallForwardComponent,
  },
  {
    path: 'no-issue-phone-phone-Change-call-forward-successfully',
    component: ChangeCallForwardSuccessComponent,
  },
  {
    path: 'forgot-ccb-pin',
    component: ForgotCcbPinComponent,
  },
  {
    path: 'no-issue-phone-phone-reset-ccb-pin-successfully',
    component: ResetCCBPINSuccessComponent,
  },
  {
    path: 'appointment-successful',
    component: AppointmentSuccessfulMessageComponent,
  },
  {
    path: 'book-complaint',
    component: BookComplaintComponent,
  },
  {
    path: 'book-appointment',
    component: BookAppointmentComponent,
  },
  {
    path: 'no-issue-phone-value-added',
    component: PhoneIssuesProblemValueAddedComponent,
  },
  {
    path: 'fiber-box-not-reachable',
    component: FiberBoxNotReachableComponent,
  },

  {
    path: 'reset-ccb-error-occur-try-again-later',
    component: ResetCcbTryAgainErrorComponent,
  },
  {
    path: 'unable-process-reset-ccb',
    component: UnableProcessResetCcbErrorComponent,
  },
  {
    path: 'reboot-devices-confirm',
    component: RebootConfirmDialogComponent,
  },
  {
    path: 'complaint-already-exists',
    component: ComplaintExistsMessageComponent,
  },
  {
    path: 'common/fiber-box-not-reachable-try-again',
    component: FiberBoxNotReachableTryAgainComponent,
  },
  {
    path:'phone-not-reachable-first-time',
    component:PhoneNotReachableFirstTimeComponent,
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
export class PhoneRoutingModule {}
