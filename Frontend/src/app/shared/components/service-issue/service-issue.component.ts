import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IMessageIssue } from '../../constants/types';

@Component({
  selector: 'app-service-issue',
  templateUrl: './service-issue.component.html',
  styleUrls: ['./service-issue.component.scss'],
})
export class ServiceIssueComponent implements OnInit, OnDestroy {
  @Input()
  messageSection: IMessageIssue;

  constructor() {}
  ngOnDestroy(): void {}

  ngOnInit() {}
}
