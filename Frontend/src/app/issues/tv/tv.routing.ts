import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxNotRestartedInstructionsComponent } from './routes/box-not-restarted-instructions.component';
import { TvBoxNotReachableSuccessComponent } from './routes/box-not-reachable-success.component';
import { TvBoxResetSuccessComponent } from './routes/box-reset-success.component';
import { TvBoxResetRequiredSuccessComponent } from './routes/box-restart-required-success.component';
import { GameSessionCancelComponent } from './routes/game-session-cancel.component';
import { IssueNotFixedComponent } from './routes/issue-not-fixed.component';

import { MainComponent } from './routes/main.component';
import { NoIssuesComponent } from './routes/no-issues.component';
import { OutageComponent } from './routes/outage.component';
import { RestartInstructionsComponent } from './routes/restart-instructions.component';
import { PackageTransferSuccessComponent } from './routes/package-transfer-success.component';
import { TvBoxNotReachableTryAgainComponent } from './routes/tvBox-not-reachable-try-again.component';
import { TvBoxNotReachableComponent } from './routes/tvBox-not-reachable.component';
import { TvBoxRestartRequiredComponent } from './routes/tvBox-restart-required.component';
import { UnableToWatchPackageTransferSuccessComponent } from './routes/unable-to-watch-package-transfer-success.component';
import { UnableWatchChannelComponent } from './routes/unable-watch-channel.component';
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
import { GameSessionComponent } from './routes/game-session/game-session.component';
import { NoAdditionalSTBComponent } from './routes/no-additional-stb.component';
import { NoNonSharedPackageComponent } from './routes/no-non-shared-package.component';
import { ERoutingIds } from 'src/app/shared/constants/constants';
import { TransferTvboxChannelComponent } from './routes/transfer-tvBox-channel.component';

import { ChannelDetailComponent } from './routes/channel-detail.component';
import { UnableWatchSpecificChannelComponent } from './routes/unable-watch-specific-channel/unable-watch-specific-channel.component';
import { PackageTransferComponent } from './routes/package-transfer.component';
import { UnableToWatchPackageTransferComponent } from './routes/unable-to-watch-package-transfer.component';
import { ComplaintExistsMessageComponent } from './routes/complaint-exists-messgae.component';
import { TvAdminPinResetSuccessfullyMessageComponent } from './routes/tv-admin-pin-reset-message.component';
import { BookComplaintComponent } from './routes/book-complaint.component';
import { ComplaintRaisedSuccessfullyMessageComponent } from './routes/complaint-raised-successfully-message.component';
import { MoveElifeConnectionMessageComponent } from './routes/move-elife-connection-message.component';
import { CancelElifeConnectionMessageComponent } from './routes/cancel-elife-connection-message.component';
import { AccountTemporarilyDisconnectedMessageComponent } from './routes/account-temporarily-disconnected-message.component';
import { AccountNotActiveMessageComponent } from './routes/account-not-active-message.component';
import { UnableTvAdminPinResetMessageComponent } from './routes/unable-tv-admin-pin-reset-message.component';
import { UnableElifeOnPinResetMessageComponent } from './routes/unable-elife-pin-reset-message.component';
import { ResetAdminPinPackageTransferComponent } from './routes/reset-admin-pin-package-transfer.component';
import { ResetPinFailedMessageComponent } from '../other/routes/reset-pin-failed-message.component';
import { SingleSTBFoundComponent } from './routes/single-stb-found-error.component';
import { OntRebootRequiredComponent } from './routes/ont-reboot-required.component';
import { OntRestartInstructionsComponent } from './routes/ont-restart-instructions.component';
import { FiberBoxRestartCareComponent } from './routes/fiber-box-restart-care.component';
import { QuickResetAdminPinPackageTransferComponent } from './routes/quick-reset-admin-pin-package-transfer.component';
import { QuickTvAdminPinResetSuccessfullyMessageComponent } from './routes/quick-tv-admin-pin-reset-message.component';
import { QuickUnableTvAdminPinResetMessageComponent } from './routes/quick-unable-tv-admin-pin-reset-message.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'no-issues',
    component: NoIssuesComponent,
  },
  {
    path: 'issues-not-fixed',
    component: IssueNotFixedComponent,
  },
  {
    path: 'game-session',
    component: GameSessionComponent,
  },
  {
    path: 'troubleshoot-complete',
    component: TroubleshootCompleteMessageComponent,
  },
  {
    path: 'detail',
    component: TvDetailComponent,
  },
  {
    path: 'unable-to-login-elife',
    component: UnableElifeLoginMessageComponent,
  },
  {
    path: 'reset-elife-pin-success',
    component: ResetElifePinSuccessMessageComponent,
  },
  {
    path: 'channel-detail',
    component: ChannelDetailComponent,
  },
  {
    path: 'ont-reboot-required',
    component: OntRebootRequiredComponent,
  },
  {
    path: 'transfer-channel-to-another-tvBox',
    component: TransferTvboxChannelComponent,
  },
  {
    path: 'outage',
    component: OutageComponent,
  },
  {
    path: 'transfer-package/step1',
    component: PackageTransferStep1Component,
  },
  {
    path: 'transfer-package/step2',
    component: PackageTransferStep2Component,
  },
  {
    //Router managed, but not reachable
    path: 'box-not-reachable',
    component: TvBoxNotReachableComponent,
  },
  {
    //Router managed, but not reachable try again
    path: 'box-not-reachable-try-again',
    component: TvBoxNotReachableTryAgainComponent,
  },
  {
    //TV set top box restart required
    path: 'box-restart-required',
    component: TvBoxRestartRequiredComponent,
  },
  {
    //Unable to watch channel
    path: 'unable-watch-channel',
    component: UnableWatchChannelComponent,
  },
  {
    //Unable to watch channel
    path: 'unable-watch-channel/step1',
    component: UnableWatchChannelStep1Component,
  },
  {
    path: 'restart-instructions',
    component: RestartInstructionsComponent,
  },
  {
    path: 'box-not-restarted-instructions',
    component: BoxNotRestartedInstructionsComponent,
  },
  {
    path: 'box-not-restarted-instructions/device-care',
    component: BoxNotRestartedCareComponent,
  },
  {
    path: 'unable-to-watch-package-transfer-success',
    component: UnableToWatchPackageTransferSuccessComponent,
  },
  {
    path: 'package-transfer-success',
    component: PackageTransferSuccessComponent,
  },
  {
    path: 'tvBox-reset-successfull',
    component: TvBoxResetSuccessComponent,
  },
  {
    path: 'game-session-cancel',
    component: GameSessionCancelComponent,
  },
  {
    path: 'tvBox-restart-required-successfully',
    component: TvBoxResetRequiredSuccessComponent,
  },
  {
    path: 'tvBox-not-reachable-form',
    component: TVBoxNotReachableFormComponent,
  },
  {
    path: 'tvBox-not-reachable-form_successfully',
    component: TvBoxNotReachableSuccessComponent,
  },

  {
    //Quick Links
    //I want to factory reset my TV box
    path: 'tv-box-reset-factory',
    component: TvBoxResetFactoryComponent,
  },
  {
    path: 'eLife-upgrade',
    component: ELifeUpgradeComponent,
  },
  {
    path: 'eLife-upgrade-success',
    component: ELifeUpgradeSuccessComponent,
  },
  {
    path: 'no-additional-stb',
    component: NoAdditionalSTBComponent,
  },
  {
    path: 'no-non-shared-package',
    component: NoNonSharedPackageComponent,
  },
  {
    path: 'pin-reset-failed',
    component: ResetPinFailedMessageComponent,
  },
  {
    path: 'package-transfer',
    component: PackageTransferComponent,
    // data: { id: ERoutingIds.packagetransfer },
  },
  {
    path: 'unable-to-watch-package-transfer',
    component: UnableToWatchPackageTransferComponent,
    // data: { id: ERoutingIds.enableWatchSpecificChannelpackageTransfer },
  },
  {
    path: 'unable-to-watch-specific-channel',
    component: UnableWatchSpecificChannelComponent,
  },

  {
    path: 'complaint-exists',
    component: ComplaintExistsMessageComponent,
  },
  {
    path: 'tv-admin-pin-reset-success',
    component: TvAdminPinResetSuccessfullyMessageComponent,
  },
  {
    path: 'quick-tv-admin-pin-reset-success',
    component: QuickTvAdminPinResetSuccessfullyMessageComponent,
  },
  {
    path: 'book-complaint',
    component: BookComplaintComponent,
  },
  {
    path: 'complaint-raised-successfull',
    component: ComplaintRaisedSuccessfullyMessageComponent,
  },

  {
    path: 'osrp/move-elife-connection',
    component: MoveElifeConnectionMessageComponent,
  },
  {
    path: 'osrp/cancel-elife-connection',
    component: CancelElifeConnectionMessageComponent,
  },
  {
    path: 'osrp/account-temporarily-disconnected',
    component: AccountTemporarilyDisconnectedMessageComponent,
  },
  {
    path: 'complaint-already-exists',
    component: ComplaintExistsMessageComponent,
  },
  {
    path: 'account-not-active',
    component: AccountNotActiveMessageComponent,
  },
  {
    path: 'unable-tv-admin-pin',
    component: UnableTvAdminPinResetMessageComponent,
  },
  {
    path: 'quick-unable-tv-admin-pin',
    component: QuickUnableTvAdminPinResetMessageComponent,
  },
  {
    path: 'unable_elifeon-pin',
    component: UnableElifeOnPinResetMessageComponent,
  },
  {
    path: 'reset-admin-pin-package-transfer',
    component: ResetAdminPinPackageTransferComponent,
  },
  {
    path: 'quick-reset-admin-pin-package-transfer',
    component: QuickResetAdminPinPackageTransferComponent,
  },
  {
    path: 'single-stb-found',
    component: SingleSTBFoundComponent,
  },
  {
    path: 'ont-restart-instructions',
    component: OntRestartInstructionsComponent,
  },
  {
    path: 'ont-restart-instructions/device-care',
    component: FiberBoxRestartCareComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TvRoutingModule {}
