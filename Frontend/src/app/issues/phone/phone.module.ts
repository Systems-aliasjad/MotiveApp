import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhoneRoutingModule } from './phone.routing';
import { MainComponent } from './routes/main.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, PhoneRoutingModule, SharedModule],
})
export class PhoneModule {}
