import { Component, Input, OnInit } from '@angular/core';
import { ITabTile } from '../../constants/types';

@Component({
  selector: 'app-issue-tabs',
  templateUrl: './issue-tabs.component.html',
  styleUrls: ['./issue-tabs.component.scss'],
})
export class IssueTabsComponent implements OnInit {
  @Input()
  tabTiles: ITabTile[];
  constructor() {}

  ngOnInit() {}
}
