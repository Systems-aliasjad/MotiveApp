import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './routes/main.component';
import { SharedModule } from '../../shared/shared.module';
import { PasswordRoutingModule } from './password.routing';
@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, PasswordRoutingModule, SharedModule],
})
export class PasswordModule {}
