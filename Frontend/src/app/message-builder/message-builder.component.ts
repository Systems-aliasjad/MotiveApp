import { Component, OnInit } from '@angular/core';

import { ApplicableCodes } from '../shared/constants/constants';

@Component({
  selector: 'app-message-builder',
  templateUrl: './message-builder.component.html',
  styleUrls: ['./message-builder.component.scss'],
})
export class MessageBuilderComponent implements OnInit {
  warningImgSrc: string = 'assets/images/super-icons/icon_supericon_all_warning_warning_consumer_regular.svg';
  successImgSrc: string = 'assets/images/super-icons/icon_supericon_consumer_success_success_consumer_regular.svg';
  openServiceRequestData = {
    reqNo: '436529873',
    reqType: 'Xxxxx xxxxx xxxx',
    dateVisit: 'Jul 10 2019, 10:30 AM',
    status: 'Xxxxx xxxxx xxxx',
  };
  openServiceRequestCase1 = {
    header: 'MESSAGES.MOVING_ELIFE_CONNECTION',
    paragraphs: ['MESSAGES.MOVING_ELIFE_CONNECTION_BODY_1', 'MESSAGES.MOVING_ELIFE_CONNECTION_BODY_2'],
  };
  openServiceRequestCase2 = {
    header: 'MESSAGES.ACCOUNT_TEMPORARILY_DISCONNECTED',
    paragraphs: ['MESSAGES.ACCOUNT_TEMPORARILY_DISCONNECTED_BODY'],
  };
  openServiceRequestCase3 = {
    header: 'MESSAGES.ELIFE_CANCELLATION_REQUEST_PROGRESS',
    paragraphs: ['MESSAGES.ELIFE_CANCELLATION_REQUEST_PROGRESS_BODY'],
  };
  imgSrc: string = this.warningImgSrc;
  Section1Data = this.openServiceRequestCase3;
  openServiceRequestTemplate;
  showLoader: boolean = false;
  constructor() {
    this.openServiceRequestTemplate = ApplicableCodes.openServiceRequestTemplate;
  }

  ngOnInit(): void {}
}
