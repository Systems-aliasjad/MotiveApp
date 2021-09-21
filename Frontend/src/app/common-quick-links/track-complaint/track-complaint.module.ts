import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { trackComplaintRoutingModule } from './track-complaint.routing';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, trackComplaintRoutingModule],
})
export class TrackComplaintModule {}
