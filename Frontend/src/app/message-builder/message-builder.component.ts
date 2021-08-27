import { Component, OnInit } from '@angular/core';
import { ApplicableCodes } from '../shared/constants/constants';
import { CustomerJourneyConstants } from '../shared/constants/CustomerJourneyConstants';

@Component({
  selector: 'app-message-builder',
  templateUrl: './message-builder.component.html',
  styleUrls: ['./message-builder.component.scss'],
})
export class MessageBuilderComponent implements OnInit {
  warningImgSrc: string = 'assets/images/super-icons/icon_supericon_all_warning_warning_consumer_regular.svg';
  successImgSrc: string = 'assets/images/super-icons/icon_supericon_consumer_success_success_consumer_regular.svg';

  codeType;
  Section1Data: any;
  Section2Data: any;
  followUpButton: boolean = false;
  followupComplain: boolean = false;
  exitTroubleshootLink: boolean = false;
  anotherComplainLink: boolean = false;

  imgSrc: string = this.warningImgSrc;

  Section2Template;
  showLoader: boolean = false;
  constructor() {}

  ngOnInit(): void {
    if (this.codeType === 1) {
      this.Section2Template = ApplicableCodes.openServiceRequestTemplateCompliant;
      this.Section1Data = CustomerJourneyConstants.complaintExistsCase1;
      this.Section2Data = {
        complaintNo: '436529873',
        dateVisit: 'Jul 10 2019, 10:30 AM',
        status: 'Xxxxx xxxxx xxxx',
      };
      this.followupComplain = true;
      this.anotherComplainLink = true;
    } else {
      this.Section1Data = CustomerJourneyConstants.openServiceRequestCase3;
      this.Section2Template = ApplicableCodes.openServiceRequestTemplate;
      this.Section2Data = {
        reqNo: '436529873',
        reqType: 'Xxxxx xxxxx xxxx',
        dateVisit: 'Jul 10 2019, 10:30 AM',
        status: 'Xxxxx xxxxx xxxx',
      };

      this.followUpButton = true;
      this.exitTroubleshootLink = true;
    }
  }
}
