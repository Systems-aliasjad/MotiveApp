import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';

import { InternetRoutingModule } from './internet.routing';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, InternetRoutingModule],
})
export class InternetModule {}
