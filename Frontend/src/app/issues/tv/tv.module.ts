import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TvRoutingModule } from './tv.routing';
import { MainComponent } from './routes/main.component';
import { SharedModule } from '../../shared/shared.module';
import { NoIssuesComponent } from './routes/no-issues.component';
import { IssueNotFixedComponent } from './routes/issue-not-fixed.component';
import { OutageComponent } from './routes/outage.component';
import { TvBoxNotReachableComponent } from './routes/tvBox-not-reachable.component';
import { TvBoxNotReachableTryAgainComponent } from './routes/tvBox-not-reachable-try-again.component';
import { TvBoxRestartRequiredComponent } from './routes/tvBox-restart-required.component';
import { UnableWatchChannelComponent } from './routes/unable-watch-channel.component';
import { RestartInstructionsComponent } from './routes/restart-instructions.component';
import { BoxNotRestartedInstructionsComponent } from './routes/box-not-restarted-instructions.component';
import { UnableToWatchPackageTransferSuccessComponent } from './routes/unable-to-watch-package-transfer-success.component';
import { PackageTransferSuccessComponent } from './routes/package-transfer-success.component';
import { TvBoxResetSuccessComponent } from './routes/box-reset-success.component';
import { GameSessionCancelComponent } from './routes/game-session-cancel.component';
import { TvBoxResetRequiredSuccessComponent } from './routes/box-restart-required-success.component';
import { TvBoxNotReachableSuccessComponent } from './routes/box-not-reachable-success.component';
import { TvBoxResetFactoryComponent } from './routes/tv-box-reset-factory.component';
import { ELifeUpgradeSuccessComponent } from './routes/eLife-upgrade-success.component';
import { BoxNotRestartedCareComponent } from './routes/box-not-restarted-care.component';
import { PackageTransferStep1Component } from './routes/package-transfer-step1.component';
import { PackageTransferStep2Component } from './routes/package-transfer-step2.component';
import { UnableWatchChannelStep1Component } from './routes/unable-watch-channel-step1.component';
import { TroubleshootCompleteMessageComponent } from './routes/troubleshoot-complete-message.component';
import { UnableElifeLoginMessageComponent } from './routes/unable-elife-login-message.component';
import { ResetElifePinSuccessMessageComponent } from './routes/reset-elife-pin-success-message.component';
import { ELifeUpgradeComponent } from './routes/eLife-upgrade.component';
import { TVBoxNotReachableFormComponent } from './routes/tvBox-not-reachable-form.component';
import { TvDetailComponent } from './routes/detail/detail.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { GameSessionComponent } from './routes/game-session/game-session.component';
import { NoAdditionalSTBComponent } from './routes/no-additional-stb.component';
import { NoNonSharedPackageComponent } from './routes/no-non-shared-package.component';
import { PackageAvailableComponent } from './shared/package-available/package-available.component';
import { TransferTvboxChannelComponent } from './routes/transfer-tvBox-channel.component';
import { ChannelDetailComponent } from './routes/channel-detail.component';
import { createTranslateLoader } from 'src/app/app.module';
import { UnableWatchSpecificChannelComponent } from './routes/unable-watch-specific-channel/unable-watch-specific-channel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChannelNotListDialogComponent } from './dialogs/channel-not-list-dialog/channel-not-list-dialog.component';
import { GameSessionDialog } from './dialogs/game-session-dialog/game-session-dialog.component';
import { RestartTvboxDialog } from './dialogs/restart-tvbox-dialog/restart-tvbox-dialog.component';
import { ResetTvPinDialog } from './dialogs/reset-tv-pin-dialog/reset-tv-pin-dialog.component';
import { PackageTransferComponent } from './routes/package-transfer.component';
import { UnableToWatchPackageTransferComponent } from './routes/unable-to-watch-package-transfer.component';
import { ComplaintExistsMessageComponent } from './routes/complaint-exists-messgae.component';
import { TvAdminPinResetSuccessfullyMessageComponent } from './routes/tv-admin-pin-reset-message.component';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { BookComplaintComponent } from './routes/book-complaint.component';
import { ComplaintRaisedSuccessfullyMessageComponent } from './routes/complaint-raised-successfully-message.component';
import { MoveElifeConnectionMessageComponent } from './routes/move-elife-connection-message.component';
import { CancelElifeConnectionMessageComponent } from './routes/cancel-elife-connection-message.component';
import { AccountTemporarilyDisconnectedMessageComponent } from './routes/account-temporarily-disconnected-message.component';
import { AccountNotActiveMessageComponent } from './routes/account-not-active-message.component';
import { DeviceListDialog } from './dialogs/device-list-dialog/device-list-dialog.component';
import { UnableTvAdminPinResetMessageComponent } from './routes/unable-tv-admin-pin-reset-message.component';
import { UnableElifeOnPinResetMessageComponent } from './routes/unable-elife-pin-reset-message.component';
import { ResetAdminPinPackageTransferComponent } from './routes/reset-admin-pin-package-transfer.component';
import { SingleSTBFoundComponent } from './routes/single-stb-found-error.component';
import { OntRebootRequiredComponent } from './routes/ont-reboot-required.component';
import { OntRestartInstructionsComponent } from './routes/ont-restart-instructions.component';
import { FiberBoxRestartCareComponent } from './routes/fiber-box-restart-care.component';
import { QuickResetAdminPinPackageTransferComponent } from './routes/quick-reset-admin-pin-package-transfer.component';
import { QuickUnableTvAdminPinResetMessageComponent } from './routes/quick-unable-tv-admin-pin-reset-message.component';
import { QuickTvAdminPinResetSuccessfullyMessageComponent } from './routes/quick-tv-admin-pin-reset-message.component';
import { QuickTransferTvboxChannelComponent } from './routes/quick-transfer-tvBox-channel.component';
import { FiberBoxNotReachableComponent } from './routes/fiber-box-not-reachable-message.component';
import { TryAgainErrorComponent } from './routes/try-again-error.component';
import { QuickTvBoxPackageTransferComponent } from './routes/quick-tv-box-package-transfer.component';
import { UnableElifeTryAgainErrorComponent } from './routes/unable-elife-error-occur-try-again-later.component';
import { ResetStbStage3TransferComponent } from './routes/reset-stb-box-stage3-package-transfer.component';
import { OpenServiceRequestMessageComponent } from './routes/open-service-request-message.component';
import { SpecificChannelPackageTransferComponent } from './routes/specific-channel-package-transfer/specific-channel-package-transfer.component';

@NgModule({
  declarations: [
    MainComponent,
    OutageComponent,
    ResetTvPinDialog,
    DeviceListDialog,
    TvDetailComponent,
    NoIssuesComponent,
    GameSessionDialog,
    RestartTvboxDialog,
    GameSessionComponent,
    ELifeUpgradeComponent,
    ChannelDetailComponent,
    IssueNotFixedComponent,
    BookComplaintComponent,
    TryAgainErrorComponent,
    SingleSTBFoundComponent,
    SingleSTBFoundComponent,
    NoAdditionalSTBComponent,
    PackageTransferComponent,
    PackageAvailableComponent,
    OntRebootRequiredComponent,
    TvBoxResetSuccessComponent,
    TvBoxNotReachableComponent,
    TvBoxResetFactoryComponent,
    GameSessionCancelComponent,
    UnableWatchChannelComponent,
    NoNonSharedPackageComponent,
    BoxNotRestartedCareComponent,
    RestartInstructionsComponent,
    FiberBoxRestartCareComponent,
    ELifeUpgradeSuccessComponent,
    PackageTransferStep1Component,
    PackageTransferStep2Component,
    ChannelNotListDialogComponent,
    FiberBoxNotReachableComponent,
    TransferTvboxChannelComponent,
    TvBoxRestartRequiredComponent,
    TVBoxNotReachableFormComponent,
    PackageTransferSuccessComponent,
    ComplaintExistsMessageComponent,
    OntRestartInstructionsComponent,
    AccountNotActiveMessageComponent,
    UnableWatchChannelStep1Component,
    UnableElifeLoginMessageComponent,
    TvBoxNotReachableSuccessComponent,
    TvBoxResetRequiredSuccessComponent,
    QuickTransferTvboxChannelComponent,
    QuickTransferTvboxChannelComponent,
    TvBoxNotReachableTryAgainComponent,
    MoveElifeConnectionMessageComponent,
    UnableWatchSpecificChannelComponent,
    TroubleshootCompleteMessageComponent,
    ResetElifePinSuccessMessageComponent,
    BoxNotRestartedInstructionsComponent,
    CancelElifeConnectionMessageComponent,
    UnableToWatchPackageTransferComponent,
    UnableTvAdminPinResetMessageComponent,
    UnableElifeOnPinResetMessageComponent,
    ResetAdminPinPackageTransferComponent,
    QuickResetAdminPinPackageTransferComponent,
    QuickUnableTvAdminPinResetMessageComponent,
    TvAdminPinResetSuccessfullyMessageComponent,
    ComplaintRaisedSuccessfullyMessageComponent,
    UnableToWatchPackageTransferSuccessComponent,
    AccountTemporarilyDisconnectedMessageComponent,
    QuickTvAdminPinResetSuccessfullyMessageComponent,
    QuickTvBoxPackageTransferComponent,
    UnableElifeTryAgainErrorComponent,
    ResetStbStage3TransferComponent,
    OpenServiceRequestMessageComponent,
    SpecificChannelPackageTransferComponent
  ],
  imports: [
    CommonModule,
    TvRoutingModule,
    SharedModule,
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
    MalihuScrollbarModule.forRoot(),
  ],
  exports: [TvDetailComponent, ResetTvPinDialog],
})
export class TvModule {}
