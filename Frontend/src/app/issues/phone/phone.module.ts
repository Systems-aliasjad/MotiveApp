import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';

import { PhoneRoutingModule } from './phone.routing';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, PhoneRoutingModule],
})
export class PhoneModule {}
