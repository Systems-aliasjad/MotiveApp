import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IMessageIssue, ITabTile } from '../../constants/types';
import { ActivatedRoute } from '@angular/router';
import { ApplicableCodes, ERoutingIds } from '../../constants/constants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-issue-tabs',
  templateUrl: './issue-tabs.component.html',
  styleUrls: ['./issue-tabs.component.scss'],
})
export class IssueTabsComponent implements OnInit, OnDestroy {
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
      this.initialization();
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {}

  initialization() {
    // if (this.codeType === ERoutingIds.routerNotReachable) {
    //   this.section1Template = ApplicableCodes.routerNotReachableTemplate;
    //   this.section1Data = {
    //     routerName: 'Unnamed router',
    //     routerModel: 'xxxx xxxx  xxxx xxx',
    //   };
    // }
  }
}
