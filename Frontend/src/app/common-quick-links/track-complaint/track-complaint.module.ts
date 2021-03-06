import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { trackComplaintRoutingModule } from './track-complaint.routing';
import { ComplaintDetailsMessageComponent } from './routes/complaint-details-message.component';
import { ComplaintAlreadyExistsMessageComponent } from './routes/complaint-already-exists-message.component';
import { ComplaintUnderProcessMessageComponent } from './routes/complaint-under-process-messaage.component';
import { ComplaintDetailsResolvedMessageComponent } from './routes/complaint-details-resolved-message.component';
import { ComplaintNotFoundMessageComponent } from './routes/complaint-not-found-message.component';

@NgModule({
  declarations: [
    ComplaintDetailsMessageComponent,
    ComplaintAlreadyExistsMessageComponent,
    ComplaintUnderProcessMessageComponent,
    ComplaintDetailsResolvedMessageComponent,
    ComplaintNotFoundMessageComponent,
  ],
  imports: [CommonModule, SharedModule, trackComplaintRoutingModule],
})
export class TrackComplaintModule {}
