import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplaintAlreadyExistsMessageComponent } from './routes/complaint-already-exists-message.component';
import { ComplaintDetailsMessageComponent } from './routes/complaint-details-message.component';
import { ComplaintDetailsResolvedMessageComponent } from './routes/complaint-details-resolved-message.component';
import { ComplaintNotFoundMessageComponent } from './routes/complaint-not-found-message.component';
import { ComplaintUnderProcessMessageComponent } from './routes/complaint-under-process-messaage.component';

import { TrackComplaintMainComponent } from './routes/main.component';

const routes: Routes = [
  {
    path: '',
    component: TrackComplaintMainComponent,
  },

  {
    path: 'complaint-details-message',
    component: ComplaintDetailsMessageComponent,
  },
  {
    path: 'complaint-already-message',
    component: ComplaintAlreadyExistsMessageComponent,
  },
  {
    path: 'complaint-under-process-message',
    component: ComplaintUnderProcessMessageComponent,
  },
  {
    path: 'complaint-details-resolved-message',
    component: ComplaintDetailsResolvedMessageComponent,
  },
  {
    path: 'complaint-not-found-message',
    component: ComplaintNotFoundMessageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class trackComplaintRoutingModule {}
