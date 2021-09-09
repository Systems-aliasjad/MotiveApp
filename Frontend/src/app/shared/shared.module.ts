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
import { NumberOnlyDirective } from './directives/number-only.directive';
import { BrMaskerModule } from 'br-mask';
import { IssueTabsComponent } from './components/issue-tabs/issue-tabs.component';
import { TabTileComponent } from './components/tab-tile/tab-tile.component';
import { ServiceIssueComponent } from './components/service-issue/service-issue.component';
import { RouterRestartComponent } from './components/router-restart/router-restart.component';
import { ResetInternetPasswordComponent } from './components/reset-internet-password/reset-internet-password.component';
import { DeviceCareComponent } from './components/device-care/device-care.component';
import { PasswordResetDialog } from './dialogs/password-reset-dialog/password-reset-dialog.component';
import { InternetIssuesDialog } from './dialogs/internet-issues-dialog/internet-issues-dialog.component';
import { RestartRouterDialog } from './dialogs/restart-router-dialog/restart-router-dialog.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { IssueListDialog } from './dialogs/issue-list-dialog/issue-list-dialog.component';
import { BrowserStepperComponent } from './components/browser-stepper/browser-stepper.component';
import { UnableVideoCallsComponent } from './components/unable-video-calls/unable-video-calls.component';
import { UnableConnectNewDeviceWifiComponent } from './components/unable-connect-newDevice-wifi/unable-connect-newDevice-wifi.component';
import { ResetFactoryDefaultDialog } from './dialogs/reset-factory-default-dialog/reset-factory-default-dialog.component';
import { DeviceListDialog } from './dialogs/device-list-dialog/device-list-dialog.component';
import { ResetWifiPasswordComponent } from './components/reset-wifi-password/reset-wifi-password.component';
import { ServiceDetailComponent } from './components/service-detail/service-detail.component';
import { DeviceConnectedHomezoneComponent } from './components/device-connected-homezone/device-connected-homezone.component';
import { ResetTvPinDialog } from './dialogs/reset-tv-pin-dialog/reset-tv-pin-dialog.component';
import { RestartTvboxDialogComponent } from './dialogs/restart-tvbox-dialog/restart-tvbox-dialog.component';
import { GameSessionComponent } from './components/game-session/game-session.component';
import { GameSessionDialog } from './dialogs/game-session-dialog/game-session-dialog.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'src/assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    PageTopComponent,
    HeaderComponent,
    MessageScreenComponent,
    ThankyouScreenComponent,
    TermsConditionsComponent,
    LoaderComponent,
    BookComplaintComponent,
    NumberOnlyDirective,
    IssueTabsComponent,
    TabTileComponent,
    ServiceIssueComponent,
    RouterRestartComponent,
    ResetInternetPasswordComponent,
    DeviceCareComponent,
    PasswordResetDialog,
    InternetIssuesDialog,
    RestartRouterDialog,
    ButtonsComponent,
    IssueListDialog,
    BrowserStepperComponent,
    UnableVideoCallsComponent,
    UnableConnectNewDeviceWifiComponent,
    ResetFactoryDefaultDialog,
    DeviceListDialog,
    ResetWifiPasswordComponent,
    ServiceDetailComponent,
    DeviceConnectedHomezoneComponent,
    ResetTvPinDialog,
    RestartTvboxDialogComponent,
    GameSessionComponent,
    GameSessionDialog,
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
    PageTopComponent,
    ButtonsComponent,
    HeaderComponent,
    MessageScreenComponent,
    ThankyouScreenComponent,
    LoaderComponent,
    BookComplaintComponent,
    ServiceIssueComponent,
    ResetInternetPasswordComponent,
    ResetWifiPasswordComponent,
  ],

  entryComponents: [],
})
export class SharedModule {}
