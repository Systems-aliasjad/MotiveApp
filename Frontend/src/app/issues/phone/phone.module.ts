import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
import { ForgotCcbPinMessageComponent } from './routes/forgot-ccb-pin-message.component';
import { OntRestartInstructionsComponent } from './routes/ont-restart-instructions.component';
import { OntNotRestartInstructionsComponent } from './routes/ont-not-restart-instructions.component';
import { OntRestartSuccessComponent } from './routes/ont-restart-success.component';
import { ChangeCallForwardSuccessComponent } from './routes/change-call-forward-success.component';
import { ResetCCBPINSuccessComponent } from './routes/reset-ccb-pin-success.component';
import { NoDailToneCareComponent } from './routes/no-dial-tone-care.component';
import { UnableToCallCareComponent } from './routes/unable-to-call-care.component';
import { BookAppointmentComponent } from './routes/book-appointment.component';
import { BookComplaintComponent } from './routes/book-complaint.component';
import { ChangeCallForwardComponent } from './routes/change-call-forward/change-call-forward.component';
import { ForgotCcbPinComponent } from './routes/forgot-ccb-pin.component';
import { PhoneIssuesProblemValueAddedComponent } from './routes/phone-issues-problem-value-added/phone-issues-problem-value-added.component';
import { createTranslateLoader } from 'src/app/app.module';
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

@NgModule({
  declarations: [
    MainComponent,
    OutageComponent,
    NoIssuesComponent,
    OntRebootComponent,
    ForgotCcbPinComponent,
    IssueNotFixedComponent,
    BookComplaintComponent,
    OutageMessageComponent,
    NoDailToneCareComponent,
    BookAppointmentComponent,
    OntRebootMessageComponent,
    UnableToCallCareComponent,
    OntRestartSuccessComponent,
    PhoneNotReachableComponent,
    ChangeCallForwardComponent,
    ResetCCBPINSuccessComponent,
    CallForwardMessageComponent,
    FiberBoxRestartCareComponent,
    ForgotCcbPinMessageComponent,
    FiberBoxNotReachableComponent,
    IssueNotFixedMessageComponent,
    OntRestartInstructionsComponent,
    CallForwardFailedMessageComponent,
    ChangeCallForwardSuccessComponent,
    ForgotCcbPinFailedMessageComponent,
    OntNotRestartInstructionsComponent,
    MoveElifeConnectionMessageComponent,
    AppointmentSuccessfulMessageComponent,
    PhoneIssuesProblemValueAddedComponent,
    CancelElifeConnectionMessageComponent,
    AccountTemporarilyDisconnectedMessageComponent,
    ResetCcbTryAgainErrorComponent,
    UnableProcessResetCcbErrorComponent,
  ],
  imports: [
    CommonModule,
    PhoneRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule.forRoot(),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
  ],
  exports: [PhoneIssuesProblemValueAddedComponent],
})
export class PhoneModule {}
