import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrackComplaintMainComponent } from './routes/main.component';

const routes: Routes = [
  {
    path: '',
    component: TrackComplaintMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class trackComplaintRoutingModule {}
