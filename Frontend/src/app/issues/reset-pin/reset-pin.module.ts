import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';

import { ResetPinRoutingModule } from './reset-pin.routing';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, ResetPinRoutingModule],
})
export class ResetPinModule {}
