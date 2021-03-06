import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { PageTopComponent } from './components/page-top/page-top.component';
import { ThankyouScreenComponent } from './components/thankyou-screen/thankyou-screen.component';
import { MotiveMessageComponent } from './components/motive-message/motive-message.component';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { BookComplaintComponent } from './components/book-complaint/book-complaint.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberOnlyDirective } from './directives/number-only.directive';
import { BrMaskerModule } from 'br-mask';
import { IssueTabsComponent } from './components/issue-tabs/issue-tabs.component';
import { TabTileComponent } from './components/tab-tile/tab-tile.component';
import { RestartInstructionComponent } from './components/restart-instruction/restart-instruction.component';
import { DeviceCareComponent } from './components/device-care/device-care.component';
import { ButtonComponent } from './components/buttons/button.component';
import { IssueListDialog } from './dialogs/issue-list-dialog/issue-list-dialog.component';
import { DeviceListDialog } from './dialogs/device-list-dialog/device-list-dialog.component';
import { DiagnoseIssueComponent } from './components/diagnose-issue/diagnose-issue.component';
import { CcbPinResetFormComponent } from './components/forgot-ccb-pin/ccb-pin-reset-form.component';
import { ResetRouterPasswordComponent } from './components/reset-router-password/reset-router-password.component';
import { ResetPinComponent } from './components/reset-pin/reset-pin.component';
import { MotiveMessageBulletComponent } from './components/motive-message-bullet/motive-message-bullet.component';
import { MotiveMessageFeedbackComponent } from './components/motive-message-feedback/motive-message-feedback.component';
import { createTranslateLoader } from '../app.module';
import { GenericErrorComponent } from './components/generic-error/generic-error.component';
import { ThreeLayersComponent } from './components/network-diagrams/three-layers/three-layers.component';
import { HeaderSingleLineComponent } from './components/header-single-line/header-single-line.component';
import { HeaderMultiLineComponent } from './components/header-multi-line/header-multi-line.component';
import { MultiLayerComponent } from './components/network-diagrams/multi-layer/multi-layer.component';
import { FiveLayerComponent } from './components/network-diagrams/five-layer/five-layer.component';
import { TransferPackageComponent } from './components/transfer-package/transfer-package.component';
import { SevenLayerComponent } from './components/network-diagrams/seven-layer/seven-layer.component';

@NgModule({
  declarations: [
    DiagnoseIssueComponent,
    PageTopComponent,
    MotiveMessageComponent,
    MultiLayerComponent,
    FiveLayerComponent,
    SevenLayerComponent,
    ThankyouScreenComponent,
    TermsConditionsComponent,
    BookComplaintComponent,
    NumberOnlyDirective,
    IssueTabsComponent,
    GenericErrorComponent,
    ThreeLayersComponent,
    TabTileComponent,
    RestartInstructionComponent,
    DeviceCareComponent,
    ButtonComponent,
    IssueListDialog,
    DeviceListDialog,
    CcbPinResetFormComponent,
    ResetRouterPasswordComponent,
    ResetPinComponent,
    MotiveMessageBulletComponent,
    MotiveMessageFeedbackComponent,
    HeaderSingleLineComponent,
    HeaderMultiLineComponent,
    TransferPackageComponent,
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrMaskerModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
  ],
  exports: [
    DiagnoseIssueComponent,
    DeviceCareComponent,
    PageTopComponent,
    ButtonComponent,
    MotiveMessageComponent,
    ThankyouScreenComponent,
    BookComplaintComponent,
    RestartInstructionComponent,
    CcbPinResetFormComponent,
    ResetRouterPasswordComponent,
    ResetPinComponent,
    MotiveMessageBulletComponent,
    TabTileComponent,
    MotiveMessageFeedbackComponent,
    HeaderMultiLineComponent,
    HeaderSingleLineComponent,
    TransferPackageComponent,
    MultiLayerComponent,
  ],

  entryComponents: [],
})
export class SharedModule {}
