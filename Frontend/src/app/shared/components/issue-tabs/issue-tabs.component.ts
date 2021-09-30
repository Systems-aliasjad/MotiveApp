import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IMessageIssue, IOntDetail, IRouterDetail, ITabTile } from '../../constants/types';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-issue-tabs',
  templateUrl: './issue-tabs.component.html',
  styleUrls: ['./issue-tabs.component.scss'],
})
export class IssueTabsComponent implements OnInit, OnDestroy {
  @Input() ontConfig: IOntDetail;
  @Input() routerConfig: IRouterDetail;
  @Input()
  tabTiles: ITabTile[];
  @Input()
  messageSection: IMessageIssue;
  subscription: Subscription;
  codeType;
  @Input()
  section1Template;
  @Input()
  section1Data;
  constructor(private activatedRoute: ActivatedRoute) {
    this.subscription = this.activatedRoute.data.subscribe((data) => {
      this.codeType = data.id;
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {}
}
