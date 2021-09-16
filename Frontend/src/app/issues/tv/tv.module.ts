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
import { BoxNotRestartInstructionsComponent } from './routes/box-not-restart-instructions.component';

@NgModule({
  declarations: [
    MainComponent,
    NoIssuesComponent,
    IssueNotFixedComponent,
    OutageComponent,
    TvBoxNotReachableComponent,
    TvBoxNotReachableTryAgainComponent,
    TvBoxRestartRequiredComponent,
    UnableWatchChannelComponent,
    RestartInstructionsComponent,
    BoxNotRestartInstructionsComponent,
  ],
  imports: [CommonModule, TvRoutingModule, SharedModule],
})
export class TvModule {}
