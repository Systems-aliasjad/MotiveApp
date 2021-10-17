import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountIdComponent } from './routes/account-id/account-id.component';
import { MainComponent } from './routes/main.component';

const routes: Routes = [
  {
    path: 'account-id',
    component: AccountIdComponent,
  },

  {
    path: '',
    component: AccountIdComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherRoutingModule {}
