import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';

import { OtherRoutingModule } from './other.routing';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, OtherRoutingModule],
})
export class OtherModule {}
