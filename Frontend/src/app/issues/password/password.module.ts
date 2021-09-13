import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';

import { PasswordRoutingModule } from './password.routing';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, PasswordRoutingModule],
})
export class PasswordModule {}
