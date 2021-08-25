import { Component, OnInit } from '@angular/core';

import { ApplicableCodes } from '../shared/constants/constants';

@Component({
  selector: 'app-message-builder',
  templateUrl: './message-builder.component.html',
  styleUrls: ['./message-builder.component.scss'],
})
export class MessageBuilderComponent implements OnInit {
  openServiceRequestData = {
    reqNo: '436529873',
    reqType: 'Xxxxx xxxxx xxxx',
    dateVisit: 'Jul 10 2019, 10:30 AM',
    status: 'Xxxxx xxxxx xxxx',
  };
  Section1Data = {
    header: 'MESSAGES.MOVING_ELIFE_CONNECTION',
    paragraphs: ['MESSAGES.MOVING_ELIFE_CONNECTION_BODY_1', 'MESSAGES.MOVING_ELIFE_CONNECTION_BODY_2'],
  };
  openServiceRequestTemplate;
  showLoader: boolean = false;
  constructor() {
    this.openServiceRequestTemplate = ApplicableCodes.openServiceRequestTemplate;
  }

  ngOnInit(): void {}
}
