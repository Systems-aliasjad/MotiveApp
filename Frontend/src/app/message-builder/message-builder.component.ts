import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicableCodes } from '../shared/constants/constants';
import { CustomerJourneyConstants } from '../shared/constants/CustomerJourneyConstants';
import { IButton } from '../shared/constants/types';

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

  buttonsConfig: IButton[] = [
    {
      title: 'BUTTONS.FOLLOW_UP',
      explanatoryNote: 'TEXT.FOLLOW_UP_QUESTION',
      clickListener: () => {},
      behaviour: 'primary',
    },
    // {
    //   title: 'BUTTONS.YES',
    //   clickListener: () => {},
    //   behaviour: 'primary',
    // },
    // {
    //   title: 'BUTTONS.CLOSE',
    //   clickListener: () => {},
    //   behaviour: 'secondary',
    // },
    {
      title: 'LINKS.EXIT_TROUBLESHOOTING',
      clickListener: () => {},
      behaviour: 'link',
    },
    // {
    //   title: 'LINKS.COMPLAINT_ANOTHER',
    //   clickListener: () => {},
    //   behaviour: 'link',
    // },
  ];

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe((data) => {
      this.codeType = data.id;
    });
  }

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
    }
    ///For OSRP
    else if (this.codeType === 2) {
      this.Section1Data = CustomerJourneyConstants.openServiceRequestCase1;
      this.Section2Template = ApplicableCodes.openServiceRequestTemplate;
      this.Section2Data = {
        reqNo: '436529873',
        reqType: 'Xxxxx xxxxx xxxx',
        dateVisit: 'Jul 10 2019, 10:30 AM',
        status: 'Xxxxx xxxxx xxxx',
      };

      this.followUpButton = true;
      this.exitTroubleshootLink = true;
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
