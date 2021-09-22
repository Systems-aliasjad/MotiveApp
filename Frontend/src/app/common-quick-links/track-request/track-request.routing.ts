import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentSetSuccessfullyMessageComponent } from './routes/appointment-set-successfully-message.component';

import { TrackRequestMainComponent } from './routes/main.component';
import { RequestInProcessMessageComponent } from './routes/request-in-process-message.component';
import { WorkNotCompletedMessageComponent } from './routes/work-not-completed-message.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class trackRequestRoutingModule {}
