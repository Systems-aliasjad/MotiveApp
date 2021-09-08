import { Component, Input, OnInit } from '@angular/core';
import { IMessageIssue, ITabTile } from '../../constants/types';
import { ActivatedRoute } from '@angular/router';
import { ApplicableCodes, ERoutingIds } from '../../constants/constants';

@Component({
  selector: 'app-issue-tabs',
  templateUrl: './issue-tabs.component.html',
  styleUrls: ['./issue-tabs.component.scss'],
})
export class IssueTabsComponent implements OnInit {
  @Input()
  tabTiles: ITabTile[];
  @Input()
  messageSection: IMessageIssue;

  codeType;
  section1Template;
  section1Data;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe((data) => {
      this.codeType = data.id;
    });
  }

  ngOnInit() {
    if (this.codeType === ERoutingIds.routerNotReachable) {
      this.section1Template = ApplicableCodes.routerNotReachableTemplate;
      this.section1Data = {
        routerName: 'Unnamed router',
        routerModel: 'xxxx xxxx  xxxx xxx',
      };
    }
  }
}
