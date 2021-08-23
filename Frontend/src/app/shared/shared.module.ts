import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { PageTopComponent } from './components/page-top/page-top.component';
import { IonicModule } from '@ionic/angular';
import { MessageScreenComponent } from './components/message-screen/message-screen.component';
import { ThankyouScreenComponent } from './components/thankyou-screen/thankyou-screen.component';

@NgModule({
  declarations: [PageTopComponent, MessageScreenComponent, ThankyouScreenComponent],
  imports: [CommonModule, NgxDropzoneModule, IonicModule.forRoot()],
  exports: [PageTopComponent],

  entryComponents: [],
})
export class SharedModule {}
