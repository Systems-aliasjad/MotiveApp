import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTopComponent } from './components/page-top/page-top.component';
import { HeaderComponent } from './components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { MessageScreenComponent } from './components/message-screen/message-screen.component';
import { ThankyouScreenComponent } from '../thankyou-screen/thankyou-screen.component';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [PageTopComponent, HeaderComponent, MessageScreenComponent, ThankyouScreenComponent, TermsConditionsComponent, LoaderComponent],
  imports: [CommonModule, IonicModule.forRoot()],
  exports: [PageTopComponent, HeaderComponent, MessageScreenComponent, ThankyouScreenComponent, LoaderComponent],

  entryComponents: [],
})
export class SharedModule {}
