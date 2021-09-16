import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxNotRestartInstructionsComponent } from './routes/box-not-restart-instructions.component';
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
    path: 'outage',
    component: OutageComponent,
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
    path: 'restart-instructions',
    component: RestartInstructionsComponent,
  },
  {
    path: 'box-not-restart-instructions',
    component: BoxNotRestartInstructionsComponent,
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
    path: 'tvBox-not-reachable-form_successfully',
    component: TvBoxNotReachableSuccessComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TvRoutingModule {}
