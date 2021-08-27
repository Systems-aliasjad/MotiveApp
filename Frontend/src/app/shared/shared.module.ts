import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PageTopComponent } from './components/page-top/page-top.component';
import { ThankyouScreenComponent } from '../thankyou-screen/thankyou-screen.component';
import { MessageScreenComponent } from './components/message-screen/message-screen.component';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions.component';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { BookComplaintComponent } from './components/book-complaint/book-complaint.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'src/assets/i18n/', '.json');
}
@NgModule({
  declarations: [PageTopComponent, HeaderComponent, MessageScreenComponent, ThankyouScreenComponent, TermsConditionsComponent, LoaderComponent, BookComplaintComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
  ],
  exports: [PageTopComponent, HeaderComponent, MessageScreenComponent, ThankyouScreenComponent, LoaderComponent, BookComplaintComponent],

  entryComponents: [],
})
export class SharedModule {}
