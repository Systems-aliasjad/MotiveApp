import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTopComponent } from './components/page-top/page-top.component';
import { HeaderComponent } from './components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { MessageScreenComponent } from './components/message-screen/message-screen.component';
import { ThankyouScreenComponent } from '../thankyou-screen/thankyou-screen.component';

@NgModule({
  declarations: [PageTopComponent, HeaderComponent, MessageScreenComponent, ThankyouScreenComponent],
  imports: [CommonModule, IonicModule.forRoot()],
  exports: [PageTopComponent, HeaderComponent, MessageScreenComponent, ThankyouScreenComponent],

  entryComponents: [],
})
export class SharedModule {}
