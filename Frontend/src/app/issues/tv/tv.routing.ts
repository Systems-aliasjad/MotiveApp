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
import { ResetPinFailedMessageComponent } from 'src/app/shared/all-services/reset-pin-failed-message.component';
import { TransferPackageComponent } from './routes/transfer-package/transfer-package.component';
import { ERoutingIds } from 'src/app/shared/constants/constants';
import { TransferTvboxChannelComponent } from './routes/transfer-tvBox-channel.component';
import { ChannelDetailComponent } from './routes/channel-detail.component';

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
    component: TransferPackageComponent,
    data: { id: ERoutingIds.packagetransfer },
  },
  {
    path: 'unable-to-watch-package-transfer',
    component: TransferPackageComponent,
    data: { id: ERoutingIds.enableWatchSpecificChannelpackageTransfer },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TvRoutingModule {}
