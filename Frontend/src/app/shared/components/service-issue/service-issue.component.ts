import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IButton, IMessageIssue } from '../../constants/types';

@Component({
  selector: 'app-service-issue',
  templateUrl: './service-issue.component.html',
  styleUrls: ['./service-issue.component.scss'],
})
export class ServiceIssueComponent implements OnInit, OnDestroy {
  @Input()
  messageSection: IMessageIssue;
  subscription: Subscription;

  constructor(private actRoute: ActivatedRoute) {
    this.subscription = actRoute.params.subscribe((val) => {
      this.initialization();
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {}

  initialization() {}
}
