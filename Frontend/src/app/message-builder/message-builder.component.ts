import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  imgSrc: string = this.warningImgSrc;

  Section2Template;
  showLoader: boolean = false;

  buttonsConfig: IButton[] = [];
  routeLinkHelper(arr) {
    return arr.map((obj) => {
      return {
        ...obj,
        clickListener: () => {
          this.router.navigate([obj.linkTo]);
        },
      };
    });
  }
  constructor(private activatedRoute: ActivatedRoute, public router: Router) {
    this.activatedRoute.data.subscribe((data) => {
      this.codeType = data.id;
    });
  }

  ngOnInit(): void {
    //Open Complaint
    if (this.codeType === 1) {
      this.Section2Template = ApplicableCodes.openServiceRequestTemplateCompliant;
      this.Section1Data = CustomerJourneyConstants.complaintExistsCase1;
      this.Section2Data = {
        complaintNo: '436529873',
        dateVisit: 'Jul 10 2019, 10:30 AM',
        status: 'Xxxxx xxxxx xxxx',
      };
      this.buttonsConfig = this.routeLinkHelper(CustomerJourneyConstants.openComplaintButtons);
    }
    //Open service request present
    else if (this.codeType === 2) {
      this.Section1Data = CustomerJourneyConstants.openServiceRequestCase1;
      this.Section2Template = ApplicableCodes.openServiceRequestTemplate;
      this.Section2Data = {
        reqNo: '436529873',
        reqType: 'Xxxxx xxxxx xxxx',
        dateVisit: 'Jul 10 2019, 10:30 AM',
        status: 'Xxxxx xxxxx xxxx',
      };
      this.buttonsConfig = this.routeLinkHelper(CustomerJourneyConstants.openServiceRequestCaseButtons);
    } //end of OSRP //Open service request present

    ///For Appointment book successfully IssuesNotFixed
    else if (this.codeType === 3) {
      this.Section1Data = CustomerJourneyConstants.appointmentbookssuccessfullyCase;
      this.Section2Template = ApplicableCodes.appointBookSuccessfullyTemplate;
      this.Section2Data = {
        referenceNo: '436529873',
        dateVisit: 'Jul 10 2019, 10:30 AM',
        location: 'Xxxxx xxxxx xxxx',
      };

      this.imgSrc = this.successImgSrc;
      this.buttonsConfig = this.routeLinkHelper(CustomerJourneyConstants.appointmentbookssuccessfullyButtons);
    }
    //Open technical S/R
    else if (this.codeType === 4) {
      this.Section1Data = CustomerJourneyConstants.OpenTechnicalSR;
      this.Section2Template = ApplicableCodes.openServiceRequestTemplate;
      this.Section2Data = {
        reqNo: '436529873',
        reqType: 'Xxxxx xxxxx xxxx',
        dateVisit: 'Jul 10 2019, 10:30 AM',
        status: 'Xxxxx xxxxx xxxx',
      };

      this.imgSrc = this.warningImgSrc;
      this.buttonsConfig = this.routeLinkHelper(CustomerJourneyConstants.openTechnicalSrButtons);
    }
    ///For package upgrade Successfully
    else if (this.codeType === 5) {
      this.Section1Data = CustomerJourneyConstants.packageUpgradesuccessfullyCase;
      this.Section2Template = ApplicableCodes.packageUpgradeTemplate;
      this.Section2Data = {
        referenceNo: '436529873',
      };

      this.imgSrc = this.successImgSrc;
      this.buttonsConfig = this.routeLinkHelper(CustomerJourneyConstants.packageUpdareRequestsuccessfullyButtons);
    }
    //TODO: dummy need to remove this case at the end
    else {
      this.Section1Data = CustomerJourneyConstants.openServiceRequestCase3;
      this.Section2Template = ApplicableCodes.openServiceRequestTemplate;
      this.Section2Data = {
        reqNo: '436529873',
        reqType: 'Xxxxx xxxxx xxxx',
        dateVisit: 'Jul 10 2019, 10:30 AM',
        status: 'Xxxxx xxxxx xxxx',
      };
    }
  }
}
