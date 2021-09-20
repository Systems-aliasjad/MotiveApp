import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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

@NgModule({
  declarations: [
    MainComponent,
    NoIssuesComponent,
    UnableWatchChannelStep1Component,
    PackageTransferStep1Component,
    PackageTransferStep2Component,
    IssueNotFixedComponent,
    OutageComponent,
    TvBoxNotReachableComponent,
    TvBoxNotReachableTryAgainComponent,
    TvBoxRestartRequiredComponent,
    UnableWatchChannelComponent,
    RestartInstructionsComponent,
    BoxNotRestartedInstructionsComponent,
    BoxNotRestartedCareComponent,
    UnableToWatchPackageTransferSuccessComponent,
    PackageTransferSuccessComponent,
    TvBoxResetSuccessComponent,
    GameSessionCancelComponent,
    TvBoxResetRequiredSuccessComponent,
    TvBoxNotReachableSuccessComponent,
    TvBoxResetFactoryComponent,
    ELifeUpgradeSuccessComponent,
  ],
  imports: [CommonModule, TvRoutingModule, SharedModule],
})
export class TvModule {}
