import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicableCodes } from '../shared/constants/constants';
import { CustomerJourneyConstants } from '../shared/constants/CustomerJourneyConstants';
import { IButton } from '../shared/constants/types';
import { ERoutingIds } from '../shared/constants/constants';
import { SharedService } from '../shared/shared.service';

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
  Section2Template;
  Section2Data: any;
  subHeaderSectionTemplate: any;
  subHeaderSectionData: any;

  imgSrc: string = this.warningImgSrc;

  showLoader: boolean = false;

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
  constructor(private activatedRoute: ActivatedRoute, public router: Router, private sharedService: SharedService) {
    this.activatedRoute.data.subscribe((data) => {
      this.codeType = data.id;
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    //Open Complaint

    if (this.codeType === ERoutingIds.openComplaint) {
      this.Section2Template = ApplicableCodes.openServiceRequestTemplateCompliant;
      this.Section1Data = CustomerJourneyConstants.complaintExistsCase1;
      this.Section2Data = {
        complaintNo: '436529873',
        dateVisit: 'Jul 10 2019, 10:30 AM',
        status: 'Xxxxx xxxxx xxxx',
      };
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.openComplaintButtons));
    }
    //Open service request present
    else if (this.codeType === ERoutingIds.osrp) {
      this.Section1Data = CustomerJourneyConstants.openServiceRequestCase1;
      this.Section2Template = ApplicableCodes.openServiceRequestTemplate;
      this.Section2Data = {
        reqNo: '436529873',
        reqType: 'Xxxxx xxxxx xxxx',
        dateVisit: 'Jul 10 2019, 10:30 AM',
        status: 'Xxxxx xxxxx xxxx',
      };
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.openServiceRequestCaseButtons));
    } //end of OSRP //Open service request present

    ///For Appointment book successfully IssuesNotFixed
    else if (this.codeType === ERoutingIds.appoinmentSuccessfully) {
      this.Section1Data = CustomerJourneyConstants.appointmentbookssuccessfullyCase;
      this.Section2Template = ApplicableCodes.appointBookSuccessfullyTemplate;
      this.Section2Data = {
        referenceNo: '436529873',
        dateVisit: 'Jul 10 2019, 10:30 AM',
        location: 'Xxxxx xxxxx xxxx',
      };

      this.imgSrc = this.successImgSrc;
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.appointmentbookssuccessfullyButtons));
    }
    //Open technical S/R
    else if (this.codeType === ERoutingIds.openSr) {
      this.Section1Data = CustomerJourneyConstants.OpenTechnicalSR;
      this.Section2Template = ApplicableCodes.openServiceRequestTemplate;
      this.Section2Data = {
        reqNo: '436529873',
        reqType: 'Xxxxx xxxxx xxxx',
        dateVisit: 'Jul 10 2019, 10:30 AM',
        status: 'Xxxxx xxxxx xxxx',
      };

      this.imgSrc = this.warningImgSrc;
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.openTechnicalSrButtons));
    }
    //package upgrade Successfully
    else if (this.codeType === ERoutingIds.packageUpgradeRequestSuccessfully) {
      this.Section1Data = CustomerJourneyConstants.packageUpgradesuccessfullyCase;
      this.subHeaderSectionTemplate = ApplicableCodes.packageUpgradeTemplate;
      this.subHeaderSectionData = {
        referenceNo: '436529873',
      };
      this.imgSrc = this.successImgSrc;
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.packageUpdareRequestsuccessfullyButtons));
    }

    ///For router upgrade Successfully
    else if (this.codeType === ERoutingIds.routerUpgradeRequestSuccessfully) {
      this.Section1Data = CustomerJourneyConstants.routerUpgradesuccessfullyCase;
      this.subHeaderSectionTemplate = ApplicableCodes.routerUpgradeTemplate;
      this.subHeaderSectionData = {
        referenceNo: '436529873',
      };
      this.imgSrc = this.successImgSrc;
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.routerUpdateRequestsuccessfullyButtons));
    }

    ///For router Package upgrade Successfully
    else if (this.codeType === ERoutingIds.routerPackageUpgradeRequestSuccessfully) {
      this.Section1Data = CustomerJourneyConstants.routerPackageUpgradesuccessfullyCase;
      this.subHeaderSectionTemplate = ApplicableCodes.routerPackageUpgradeTemplate;
      this.subHeaderSectionData = {
        referenceNo: '436529873',
      };
      this.imgSrc = this.successImgSrc;
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.routerPackageUpdateRequestsuccessfullyButtons));
    }

    //Account not active
    else if (this.codeType === ERoutingIds.accountNotActive) {
      this.Section1Data = CustomerJourneyConstants.accountNotActive;
      this.Section1Data.spanListener = () => {
        console.log('Span Click Listener');
      };
      this.imgSrc = this.warningImgSrc;
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.accountNotActiveButtons));
    }

    ///For third party router Successfully
    else if (this.codeType === ERoutingIds.thirdPartyRouterSuccessfully) {
      this.Section1Data = CustomerJourneyConstants.thirdPartyRoutersuccessfullyCase;
      this.subHeaderSectionTemplate = ApplicableCodes.thirdPartyRouterUpgradeTemplate;
      this.subHeaderSectionData = {
        referenceNo: '436529873',
      };
      this.imgSrc = this.successImgSrc;
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.thirdPartyRoutersuccessfullyButtons));
    }

    ///For Reset Wifi password first  Successfull
    else if (this.codeType === ERoutingIds.resetWifiPasswordSuccess) {
      this.Section1Data = CustomerJourneyConstants.resetWifiResetFirstsuccessfullyCase;
      this.imgSrc = this.successImgSrc;
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.resestWifiPasswordSuccessFirstCaseButtons));
    }

    ///For Reset Wifi password Second/Final  Successfull
    else if (this.codeType === ERoutingIds.resetWifiPasswordFormSuccessfully) {
      this.Section1Data = CustomerJourneyConstants.resetWifiResetSecondsuccessfullyCase;
      this.imgSrc = this.successImgSrc;
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.resestWifiPasswordSuccessSecondCasesuccessfullyButtons));
    }
    // Troubleshoot Complete
    else if (this.codeType === ERoutingIds.troubleshootComplete) {
      this.sharedService.setHeaderConfig('', false);
      this.Section1Data = CustomerJourneyConstants.troubleshootComplete;
      this.imgSrc = this.successImgSrc;
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.troubleshootCompleteButtons));
    }
    // TV PIN update Complete
    else if (this.codeType === ERoutingIds.tvPinUpdateSuccessfull) {
      this.sharedService.setHeaderConfig('', false);
      this.Section1Data = CustomerJourneyConstants.tvAdminPinResetSuccessfully;
      this.imgSrc = this.successImgSrc;
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.tvAdminPinResetSuccessfullyButton));
    }

    // ELife Login PIN Reset Complete
    else if (this.codeType === ERoutingIds.restELifeLoginPin) {
      this.sharedService.setHeaderConfig('', false);
      this.Section1Data = CustomerJourneyConstants.restELifeLoginPin;
      this.imgSrc = this.warningImgSrc;
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.restELifeLoginPinButton));
    }
    // ELife Login PIN Reset Success Complete
    else if (this.codeType === ERoutingIds.restELifeLoginPinResetSuccess) {
      this.sharedService.setHeaderConfig('', false);
      this.Section1Data = CustomerJourneyConstants.restELifeLoginPinResetSuccess;
      this.imgSrc = this.successImgSrc;
      this.Section2Template = ApplicableCodes.userCredentialsTemplate;
      this.Section2Data = {
        userId: '<XXX>',
        pin: '1111@eLife',
      };
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.restELifeLoginPinResetSuccessButton));
    }
    //#region  Module 2
    // Troubleshoot Complete
    else if (this.codeType === ERoutingIds.tvBoxNotReachableFormSuccessfully) {
      this.Section1Data = CustomerJourneyConstants.appointmentbookssuccessfullyCase;
      this.Section2Template = ApplicableCodes.appointBookSuccessfullyTemplate;
      this.Section2Data = {
        referenceNo: '436529873',
        dateVisit: 'Jul 10 2019, 10:30 AM',
        location: 'Xxxxx xxxxx xxxx',
      };

      this.imgSrc = this.successImgSrc;
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.appointmentbookssuccessfullyButtons));
    }
    //#endregion Module 2

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
