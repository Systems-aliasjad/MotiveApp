import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstallNewRouterComponent } from './install-new-router.component';

const routes: Routes = [
  {
    path: '',
    component: InstallNewRouterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstallNewRouterRoutingModule {}
