import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IButton, IMessageIssue } from '../../constants/types';

@Component({
  selector: 'app-service-issue',
  templateUrl: './service-issue.component.html',
  styleUrls: ['./service-issue.component.scss'],
})
export class ServiceIssueComponent implements OnInit {
  @Input()
  messageSection: IMessageIssue;

  constructor(private actRoute: ActivatedRoute) {
    actRoute.params.subscribe((val) => {
      this.initialization();
    });
  }

  ngOnInit() {}

  initialization() {}
}
