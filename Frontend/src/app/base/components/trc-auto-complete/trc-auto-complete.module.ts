import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrcAutoCompleteComponent } from './trc-auto-complete.component';
import { AppMaterialModule } from 'src/app/core/app-material/app-material.module';

@NgModule({
  declarations: [TrcAutoCompleteComponent],
  entryComponents: [TrcAutoCompleteComponent],
  exports: [TrcAutoCompleteComponent],
  imports: [AppMaterialModule, CommonModule],
})
export class TrcAutoCompleteModule {}
