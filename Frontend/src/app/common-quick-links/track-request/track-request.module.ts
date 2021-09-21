import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { trackRequestRoutingModule } from './track-request.routing';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, trackRequestRoutingModule],
})
export class TrackRequestModule {}
