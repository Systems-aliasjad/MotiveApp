import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './routes/main.component';
import { SharedModule } from '../../shared/shared.module';
import { PasswordRoutingModule } from './password.routing';
import { InternetPasswordResetComponent } from './routes/internet-password-reset.component';
@NgModule({
  declarations: [MainComponent, InternetPasswordResetComponent],
  imports: [CommonModule, PasswordRoutingModule, SharedModule],
})
export class PasswordModule {}
