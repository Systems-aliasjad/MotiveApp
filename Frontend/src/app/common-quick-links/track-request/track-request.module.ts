import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { trackRequestRoutingModule } from './track-request.routing';
import { AppointmentSetSuccessfullyMessageComponent } from './routes/appointment-set-successfully-message.component';
import { WorkNotCompletedMessageComponent } from './routes/work-not-completed-message.component';
import { RequestInProcessMessageComponent } from './routes/request-in-process-message.component';
import { RequestDetailComponent } from './routes/request-detail.component';
import { RequestUnderProcessComponent } from './routes/request-under-process.component';
import { RequestAlreadyExistsComponent } from './routes/request-already-exists.component';
import { AppointmentChangeSuccessComponent } from './routes/appointment-change-success.component';
import { ServiceUnavailableComponent } from './routes/service-unavailable.component';
import { ActionRequiredComponent } from './routes/action-required.component';
import { BookComplaintComponent } from './routes/book-complaint.component';
import { OpenSrsComponent } from './routes/open-srs/open-srs.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/app/app.module';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { TryAgainErrorComponent } from './routes/try-again-error.component';

@NgModule({
  declarations: [
    AppointmentSetSuccessfullyMessageComponent,
    WorkNotCompletedMessageComponent,
    RequestInProcessMessageComponent,
    RequestDetailComponent,
    RequestUnderProcessComponent,
    RequestAlreadyExistsComponent,
    AppointmentChangeSuccessComponent,
    ServiceUnavailableComponent,
    ActionRequiredComponent,
    BookComplaintComponent,
    OpenSrsComponent,
    TryAgainErrorComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    trackRequestRoutingModule,
    IonicModule.forRoot(),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
  ],
})
export class TrackRequestModule {}
