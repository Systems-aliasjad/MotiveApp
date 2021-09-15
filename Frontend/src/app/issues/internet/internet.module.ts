import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './routes/main.component';
import { SharedModule } from '../../shared/shared.module';
import { InternetRoutingModule } from './internet.routing';
import { OutageComponent } from './routes/outage.component';
import { OSRPComponent } from './routes/osrp.component';

@NgModule({
  declarations: [MainComponent, OutageComponent, OSRPComponent],
  imports: [CommonModule, InternetRoutingModule, SharedModule],
})
export class InternetModule {}
