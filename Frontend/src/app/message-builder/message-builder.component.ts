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
    header: 'We are moving your eLife connection',
    paragraphs: ['The service will be discontinued while the transfer is under process.', 'Try using it once your eLife connection has been moved successfully.'],
  };
  openServiceRequestTemplate;
  constructor() {
    this.openServiceRequestTemplate = ApplicableCodes.openServiceRequestTemplate;
  }

  ngOnInit(): void {}
}
