import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { trackRequestRoutingModule } from './track-request.routing';
import { AppointmentSetSuccessfullyMessageComponent } from './routes/appointment-set-successfully-message.component';
import { WorkNotCompletedMessageComponent } from './routes/work-not-completed-message.component';
import { RequestInProcessMessageComponent } from './routes/request-in-process-message.component';

@NgModule({
  declarations: [AppointmentSetSuccessfullyMessageComponent, WorkNotCompletedMessageComponent, RequestInProcessMessageComponent],
  imports: [CommonModule, SharedModule, trackRequestRoutingModule],
})
export class TrackRequestModule {}
