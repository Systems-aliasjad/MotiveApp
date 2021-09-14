import { NgModule } from '@angular/core';
import { OutageComponent } from './routes/outage.component';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './routes/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'outage',
    component: OutageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TvRoutingModule {}
