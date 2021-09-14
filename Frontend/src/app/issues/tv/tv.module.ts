import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvRoutingModule } from './tv.routing';
import { MainComponent } from './routes/main.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, TvRoutingModule, SharedModule],
})
export class TvModule {}
