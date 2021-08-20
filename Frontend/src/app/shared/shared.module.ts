import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { PageTopComponent } from './components/page-top/page-top.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [PageTopComponent],
  imports: [CommonModule, NgxDropzoneModule, IonicModule.forRoot()],
  exports: [PageTopComponent],

  entryComponents: [],
})
export class SharedModule {}
