import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';

import { TvRoutingModule } from './tv.routing';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, TvRoutingModule],
})
export class TvModule {}
