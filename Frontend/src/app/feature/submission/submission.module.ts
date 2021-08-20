import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmissionRoutingModule } from './submission-routing.module';
import { HttpModule } from 'src/app/http/http.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutModule } from '../layout/layout.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './landing/profile/profile.component';
import { QuickLinksComponent } from './landing/quickLinks/quickLinks.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [LandingComponent, ProfileComponent, QuickLinksComponent],
  imports: [CommonModule, SharedModule, SubmissionRoutingModule, LayoutModule, HttpModule, PerfectScrollbarModule, IonicModule.forRoot()],
})
export class SubmissionModule {}
