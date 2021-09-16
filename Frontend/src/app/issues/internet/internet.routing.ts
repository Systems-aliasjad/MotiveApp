import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './routes/main.component';
import { OSRPComponent } from './routes/osrp.component';
import { OutageComponent } from './routes/outage.component';
import { RouterNotRestartedComponent } from './routes/router-not-restarted.component';
import { RouterRestartComponent } from './routes/router-restart.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'outage',
    component: OutageComponent,
  },
  {
    path: 'osrp',
    component: OSRPComponent,
  },
  {
    path: 'router-not-restarted',
    component: RouterNotRestartedComponent,
  },
  {
    path: 'router-restart',
    component: RouterRestartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InternetRoutingModule {}
