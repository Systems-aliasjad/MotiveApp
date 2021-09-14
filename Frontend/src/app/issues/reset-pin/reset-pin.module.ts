import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './routes/main.component';
import { SharedModule } from '../../shared/shared.module';
import { ResetPinRoutingModule } from './reset-pin.routing';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, ResetPinRoutingModule, SharedModule],
})
export class ResetPinModule {}
