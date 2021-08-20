import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmissionRoutingModule } from './submission-routing.module';
import { AppMaterialModule } from 'src/app/core/app-material/app-material.module';
import { AppAgGridModule } from 'src/app/base/components/app-ag-grid/app-ag-grid.module';
import { BaseModule } from 'src/app/base/base.module';
import { HttpModule } from 'src/app/http/http.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutModule } from '../layout/layout.module';
import { QueryComponent as QueryComponent } from './query/query.component';
import { TrcAutoCompleteModule } from 'src/app/base/components/trc-auto-complete/trc-auto-complete.module';
import { SubmisGridComponent } from './submis-grid/submis-grid.component';
import { SubmissionDetailComponent } from './submission-detail/submission-detail.component';
import { CounterPartySearchComponent } from './counter-party-search/counter-party-search.component';
import { CounterPartyDetailComponent } from './counter-party-detail/counter-party-detail.component';
import { CounterPartyInformationComponent } from './counter-party-information/counter-party-information.component';
import { CounterPartyBankAccountComponent } from './counter-party-bank-account/counter-party-bank-account.component';
import { CounterPartyExpandedNoteComponent } from './counter-party-expanded-note/counter-party-expanded-note.component';
import { CounterPartyBankAccountHistoryComponent } from './counter-party-bank-account-history/counter-party-bank-account-history.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './landing/profile/profile.component';
import { QuickLinksComponent } from './landing/quickLinks/quickLinks.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    LandingComponent,
    ProfileComponent,
    QuickLinksComponent,
    QueryComponent,
    SubmisGridComponent,
    SubmissionDetailComponent,
    CounterPartySearchComponent,
    CounterPartyDetailComponent,
    CounterPartyInformationComponent,
    CounterPartyBankAccountComponent,
    CounterPartyExpandedNoteComponent,
    CounterPartyBankAccountHistoryComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SubmissionRoutingModule,
    TrcAutoCompleteModule,
    AppMaterialModule,
    LayoutModule,
    AppAgGridModule,
    BaseModule,
    HttpModule,
    PerfectScrollbarModule,
    IonicModule.forRoot(),
  ],
})
export class SubmissionModule {}
