import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { PageTopComponent } from './components/page-top/page-top.component';
import { ThankyouScreenComponent } from './components/thankyou-screen/thankyou-screen.component';
import { MotiveMessageComponent } from './components/motive-message/motive-message.component';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions.component';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { BookComplaintComponent } from './components/book-complaint/book-complaint.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberOnlyDirective } from './directives/number-only.directive';
import { BrMaskerModule } from 'br-mask';
import { IssueTabsComponent } from './components/issue-tabs/issue-tabs.component';
import { TabTileComponent } from './components/tab-tile/tab-tile.component';
import { ServiceIssueComponent } from './components/service-issue/service-issue.component';
import { RestartInstructionComponent } from './components/restart-instruction/restart-instruction.component';
import { DeviceCareComponent } from './components/device-care/device-care.component';
import { PasswordResetDialog } from './dialogs/password-reset-dialog/password-reset-dialog.component';
import { InternetIssuesDialog } from './dialogs/internet-issues-dialog/internet-issues-dialog.component';
import { RestartRouterDialog } from './dialogs/restart-router-dialog/restart-router-dialog.component';
import { ButtonComponent } from './components/buttons/button.component';
import { IssueListDialog } from './dialogs/issue-list-dialog/issue-list-dialog.component';
import { UnableVideoCallsComponent } from './components/unable-video-calls/unable-video-calls.component';
import { UnableConnectNewDeviceWifiComponent } from './components/unable-connect-newDevice-wifi/unable-connect-newDevice-wifi.component';
import { ResetFactoryDefaultDialog } from './dialogs/reset-factory-default-dialog/reset-factory-default-dialog.component';
import { DeviceListDialog } from './dialogs/device-list-dialog/device-list-dialog.component';
import { ResetWifiPasswordComponent } from './components/reset-wifi-password/reset-wifi-password.component';
import { ResetTvPinDialog } from './dialogs/reset-tv-pin-dialog/reset-tv-pin-dialog.component';
import { RestartTvboxDialog } from './dialogs/restart-tvbox-dialog/restart-tvbox-dialog.component';
import { GameSessionDialog } from './dialogs/game-session-dialog/game-session-dialog.component';
import { PackageAvailableComponent } from './components/package-available/package-available.component';
import { TransferPackageComponent } from './components/transfer-package/transfer-package.component';
import { UnableWatchSpecificChannelComponent } from './components/unable-watch-specific-channel/unable-watch-specific-channel.component';
import { ChannelNotListDialogComponent } from './dialogs/channel-not-list-dialog/channel-not-list-dialog.component';
import { InternetIssuesDialogSecondComponent } from './dialogs/internet-issues-dialog-second/internet-issues-dialog-second.component';
import { DiagnoseIssueComponent } from './components/diagnose-issue/diagnose-issue.component';
import { PhoneIssueListDialogComponent } from './dialogs/phone-issue-list-dialog/phone-issue-list-dialog.component';
import { PhoneIssuesProblemValueAddedComponent } from './components/phone-issues-problem-value-added/phone-issues-problem-value-added.component';
import { CcbPinResetFormComponent } from './components/forgot-ccb-pin/ccb-pin-reset-form.component';
import { ResetRouterPasswordComponent } from './components/reset-router-password/reset-router-password.component';
import { ResetPinComponent } from './components/reset-pin/reset-pin.component';
import { MotiveMessageBulletComponent } from './components/motive-message-bullet/motive-message-bullet.component';
import { InstallEtisalatRouterDialogComponent } from './dialogs/install-etisalat-router-dialog/install-etisalat-router-dialog.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'src/assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    DiagnoseIssueComponent,
    PageTopComponent,
    HeaderComponent,
    MotiveMessageComponent,
    ThankyouScreenComponent,
    TermsConditionsComponent,
    BookComplaintComponent,
    NumberOnlyDirective,
    IssueTabsComponent,
    TabTileComponent,
    ServiceIssueComponent,
    RestartInstructionComponent,
    DeviceCareComponent,
    PasswordResetDialog,
    InternetIssuesDialog,
    RestartRouterDialog,
    ButtonComponent,
    IssueListDialog,
    UnableVideoCallsComponent,
    UnableConnectNewDeviceWifiComponent,
    ResetFactoryDefaultDialog,
    DeviceListDialog,
    ResetWifiPasswordComponent,
    ResetTvPinDialog,
    RestartTvboxDialog,
    GameSessionDialog,
    PackageAvailableComponent,
    TransferPackageComponent,
    UnableWatchSpecificChannelComponent,
    ChannelNotListDialogComponent,
    InternetIssuesDialogSecondComponent,
    PhoneIssueListDialogComponent,
    PhoneIssuesProblemValueAddedComponent,
    CcbPinResetFormComponent,
    ResetRouterPasswordComponent,
    ResetPinComponent,
    MotiveMessageBulletComponent,
    InstallEtisalatRouterDialogComponent,
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
    HeaderComponent,
    MotiveMessageComponent,
    ThankyouScreenComponent,
    BookComplaintComponent,
    ServiceIssueComponent,
    RestartInstructionComponent,
    ResetWifiPasswordComponent,
    UnableWatchSpecificChannelComponent,
    InternetIssuesDialogSecondComponent,
    PhoneIssueListDialogComponent,
    PhoneIssuesProblemValueAddedComponent,
    CcbPinResetFormComponent,
    ResetRouterPasswordComponent,
    ResetPinComponent,
    MotiveMessageBulletComponent,
    TabTileComponent,
  ],

  entryComponents: [],
})
export class SharedModule {}
