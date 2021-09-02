import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { MessageBuilderComponent } from './message-builder/message-builder.component';
import { ThankyouScreenComponent } from './thankyou-screen/thankyou-screen.component';
import { TermsConditionsComponent } from './shared/components/terms-conditions/terms-conditions.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { BookComplaintComponent } from './shared/components/book-complaint/book-complaint.component';
import { IssueBuilderComponent } from './issue-builder/issue-builder.component';
import { RouterRestartComponent } from './shared/components/router-restart/router-restart.component';
import { ResetInternetPasswordComponent } from './shared/components/reset-internet-password/reset-internet-password.component';
import { DeviceCareComponent } from './shared/components/device-care/device-care.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'info',
    component: MessageBuilderComponent,
  },
  {
    path: 'thanks',
    component: ThankyouScreenComponent,
  },
  {
    path: 'terms',
    component: TermsConditionsComponent,
  },
  {
    path: 'loader',
    component: LoaderComponent,
  },
  {
    path: 'bookComplaint',
    component: BookComplaintComponent,
  },
  {
    path: 'issue',
    component: IssueBuilderComponent,
  },
  {
    path: 'router-restart',
    component: RouterRestartComponent,
  },
  {
    path: 'reset-internet-password',
    component: ResetInternetPasswordComponent,
  },
  {
    path: 'device-care',
    component: DeviceCareComponent,
  },

  /////Perform Cases

  //Open service request present
  { path: 'osrp', component: MessageBuilderComponent, data: { id: 2 } },

  //Open Complaint
  { path: 'open-complain', component: MessageBuilderComponent, data: { id: 1 } },

  /////End of Perform Cases

  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class RoutingModule {}
