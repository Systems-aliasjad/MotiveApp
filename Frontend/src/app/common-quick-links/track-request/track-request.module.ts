import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { trackRequestRoutingModule } from './track-request.routing';
import { AppointmentSetSuccessfullyMessageComponent } from './routes/appointment-set-successfully-message.component';
import { WorkNotCompletedMessageComponent } from './routes/work-not-completed-message.component';
import { RequestInProcessMessageComponent } from './routes/request-in-process-message.component';
import { RequestDetailComponent } from './routes/request-detail.component';
import { RequestUnderProcessComponent } from './routes/request-under-process.component';
import { RequestAlreadyExistsComponent } from './routes/request-already-exists.component';
import { AppointmentChangeSuccessComponent } from './routes/appointment-change-success.component';
import { ServiceUnavailableComponent } from './routes/service-unavailable.component';
import { ActionRequiredComponent } from './routes/action-required.component';
import { BookComplaintComponent } from './routes/book-complaint.component';

@NgModule({
  declarations: [
    AppointmentSetSuccessfullyMessageComponent,
    WorkNotCompletedMessageComponent,
    RequestInProcessMessageComponent,
    RequestDetailComponent,
    RequestUnderProcessComponent,
    RequestAlreadyExistsComponent,
    AppointmentChangeSuccessComponent,
    ServiceUnavailableComponent,
    ActionRequiredComponent,
    BookComplaintComponent,
  ],
  imports: [CommonModule, SharedModule, trackRequestRoutingModule],
})
export class TrackRequestModule {}
