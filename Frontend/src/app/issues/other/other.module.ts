import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherRoutingModule } from './other.routing';
import { MainComponent } from './routes/main.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, OtherRoutingModule, SharedModule],
})
export class OtherModule {}
