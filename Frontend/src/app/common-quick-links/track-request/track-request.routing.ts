import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentSetSuccessfullyMessageComponent } from './routes/appointment-set-successfully-message.component';

import { TrackRequestMainComponent } from './routes/main.component';
import { RequestInProcessMessageComponent } from './routes/request-in-process-message.component';
import { WorkNotCompletedMessageComponent } from './routes/work-not-completed-message.component';
import { ActionRequiredComponent } from './routes/action-required.component';
import { AppointmentChangeSuccessComponent } from './routes/appointment-change-success.component';
import { BookComplaintComponent } from './routes/book-complaint.component';
import { RequestAlreadyExistsComponent } from './routes/request-already-exists.component';
import { RequestDetailComponent } from './routes/request-detail.component';
import { RequestUnderProcessComponent } from './routes/request-under-process.component';
import { ServiceUnavailableComponent } from './routes/service-unavailable.component';
import { OpenSrsComponent } from './routes/open-srs/open-srs.component';

const routes: Routes = [
  {
    path: '',
    component: TrackRequestMainComponent,
  },
  {
    path: 'appointment-set-successfully',
    component: AppointmentSetSuccessfullyMessageComponent,
  },
  {
    path: 'work-not-completed',
    component: WorkNotCompletedMessageComponent,
  },
  {
    path: 'request-in-process',
    component: RequestInProcessMessageComponent,
  },
  {
    path: 'request-detail',
    component: RequestDetailComponent,
  },
  {
    path: 'request-under-process',
    component: RequestUnderProcessComponent,
  },
  {
    path: 'request-already-exists',
    component: RequestAlreadyExistsComponent,
  },
  {
    path: 'appointment-change-success',
    component: AppointmentChangeSuccessComponent,
  },
  {
    path: 'service-unavailable',
    component: ServiceUnavailableComponent,
  },
  {
    path: 'action-required',
    component: ActionRequiredComponent,
  },
  {
    path: 'book-complaint',
    component: BookComplaintComponent,
  },
  {
    path: 'open-srs',
    component: OpenSrsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class trackRequestRoutingModule {}
