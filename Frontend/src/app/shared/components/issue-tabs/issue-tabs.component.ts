import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IMessageIssue, IOntDetail, IRouterDetail, ITabTile } from '../../constants/types';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NetWorkDiagramIds } from '../../constants/constants';

@Component({
  selector: 'app-issue-tabs',
  templateUrl: './issue-tabs.component.html',
  styleUrls: ['./issue-tabs.component.scss'],
})
export class IssueTabsComponent implements OnInit, OnDestroy {
  @Input()
  stbSerialNumber: string;

  @Input()
  networkDiagram: NetWorkDiagramIds;

  @Input()
  ontConfig: IOntDetail;
  @Input()
  routerConfig: IRouterDetail;
  @Input()
  etisalatConfig;
  @Input()
  connectedDevices;
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

  className: String;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.className = this.networkDiagram === 3 && this.connectedDevices === undefined ? 'issue-tab_content two-col_right two-col-seven-layer-no-devices':
                     this.networkDiagram === 3 ? 'issue-tab_content two-col_right two-col-seven-layer': 
                     this.networkDiagram === 1 ? 'issue-tab_content two-col_right two-col-three-layer' :
                     this.networkDiagram === 2 ? 'issue-tab_content two-col_right two-col-five-layer' :
                     this.networkDiagram === 4 ? 'issue-tab_content two-col_right two-col-six-layer' : 'issue-tab_content two-col_right two-col-multi-layer';
    this.subscription = this.activatedRoute.data.subscribe((data) => {
      this.codeType = data.id;
    });
  }
}
