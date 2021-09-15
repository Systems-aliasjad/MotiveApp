import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicableCodes } from '../shared/constants/constants';
import { CustomerJourneyConstants } from '../shared/constants/CustomerJourneyConstants';
import { IButton } from '../shared/constants/types';
import { ERoutingIds } from '../shared/constants/constants';
import { SharedService } from '../shared/shared.service';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-message-builder',
  templateUrl: './message-builder.component.html',
  styleUrls: ['./message-builder.component.scss'],
})
export class MessageBuilderComponent implements OnInit, OnDestroy {
  warningImgSrc: string = 'assets/images/super-icons/icon_supericon_all_warning_warning_consumer_regular.svg';
  successImgSrc: string = 'assets/images/super-icons/icon_supericon_consumer_success_success_consumer_regular.svg';

  codeType;
  Section1Data: any;
  Section2Template;
  Section2Data: any;
  subHeaderSectionTemplate: any;
  subHeaderSectionData: any;

  subscription: Subscription;

  imgSrc: string = this.warningImgSrc;

  showLoader: boolean = false;
  buttonConfig: IButton[] = [];
  routeLinkHelper(arr) {
    return arr.map((obj) => {
      return {
        ...obj,
        clickListener: () => {
          obj?.customListner ? this[obj.customListner]() : this.router.navigate([obj.linkTo]);
        },
      };
    });
  }
  constructor(private location: Location, private activatedRoute: ActivatedRoute, public router: Router, private sharedService: SharedService) {
    this.subscription = this.activatedRoute.data.subscribe((data) => {
      this.codeType = data.id;
      this.initialization();
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {}

  cancelBackLocationLink() {
    this.location.back();
  }

  initialization() {
    this.sharedService.setDefaultValues();

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

    ///For Compliant booked successfully
    else if (this.codeType === ERoutingIds.complaintSuccessfully) {
      this.Section1Data = CustomerJourneyConstants.complaintFormsuccessfullyCase;
      this.Section2Template = ApplicableCodes.appointBookSuccessfullyTemplate;
      this.Section2Data = {
        referenceNo: '436529873',
        dateVisit: 'Jul 10 2019, 10:30 AM',
        location: 'Xxxxx xxxxx xxxx',
      };

      this.imgSrc = this.successImgSrc;
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.complaintbookssuccessfullyButtons));
    }

    ///For Router Not Reachable Compliant booked successfully
    else if (this.codeType === ERoutingIds.routerNotReachableFormSuccessfully) {
      this.Section1Data = CustomerJourneyConstants.routerNotReachableFormsuccessfullyCase;
      this.Section2Template = ApplicableCodes.appointBookSuccessfullyTemplate;
      this.Section2Data = {
        referenceNo: '436529873',
        dateVisit: 'Jul 10 2019, 10:30 AM',
        location: 'Xxxxx xxxxx xxxx',
      };

      this.imgSrc = this.successImgSrc;
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.complaintbookssuccessfullyButtons));
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
      this.sharedService.setHeaderConfig('', false, false);
      this.Section1Data = CustomerJourneyConstants.troubleshootComplete;
      this.imgSrc = this.successImgSrc;
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.troubleshootCompleteButtons));
    }
    // TV PIN update Complete
    else if (this.codeType === ERoutingIds.tvPinUpdateSuccessfull) {
      this.sharedService.setHeaderConfig('', false, false);
      this.Section1Data = CustomerJourneyConstants.tvAdminPinResetSuccessfully;
      this.imgSrc = this.successImgSrc;
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.tvAdminPinResetSuccessfullyButton));
    }

    // ELife Login PIN Reset Complete
    else if (this.codeType === ERoutingIds.restELifeLoginPin) {
      this.sharedService.setHeaderConfig('', false, false);
      this.Section1Data = CustomerJourneyConstants.restELifeLoginPin;
      this.imgSrc = this.warningImgSrc;
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.restELifeLoginPinButton));
    }
    // ELife Login PIN Reset Success Complete
    else if (this.codeType === ERoutingIds.restELifeLoginPinResetSuccess) {
      this.sharedService.setHeaderConfig('', false, false);
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
    // Tv box not reachable
    else if (this.codeType === ERoutingIds.tvBoxNotReachableFormSuccessfully) {
      this.sharedService.setHeaderConfig('', false, false);
      this.Section1Data = CustomerJourneyConstants.tvBoxNotReachableFormsuccessfullyCase;
      this.Section2Template = ApplicableCodes.appointBookSuccessfullyTemplate;
      this.Section2Data = {
        referenceNo: '436529873',
        dateVisit: 'Jul 10 2019, 10:30 AM',
        location: 'Xxxxx xxxxx xxxx',
      };

      this.imgSrc = this.successImgSrc;
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.appointmentbookssuccessfullyButtons));
    }
    // Tv box Restart Required
    else if (this.codeType === ERoutingIds.tvBoxRestartRequiredSuccessfully) {
      this.sharedService.setHeaderConfig('', false, false);
      this.Section1Data = CustomerJourneyConstants.tvBoxRestartssuccessfullyCase;
      this.imgSrc = this.successImgSrc;
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.tvBoxRestartSuccessfullyButtons));
    }
    // Game session cancel Confirm
    else if (this.codeType === ERoutingIds.gameSessionCancelConfirmed) {
      this.sharedService.setHeaderConfig('', false, false);
      this.Section1Data = CustomerJourneyConstants.gameSessionCancelConfirmed;
      this.imgSrc = this.successImgSrc;
      this.sharedService.setButtonConfig(this.routeLinkHelper([CustomerJourneyConstants.doneButtonSecondary]));
    }
    //For Reset TV box successfully
    else if (this.codeType === ERoutingIds.tvBoxResetSuccessfully) {
      this.sharedService.setHeaderConfig('', false, false);
      this.Section1Data = CustomerJourneyConstants.tvBoxResetSuccessfullyCase;
      this.imgSrc = this.successImgSrc;
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.tvBoxResetSuccessfullyButtons));
    }
    // package transfer success
    else if (this.codeType === ERoutingIds.packageTransferSuccess) {
      this.sharedService.setHeaderConfig('', false, false);
      this.Section1Data = CustomerJourneyConstants.packageTransferSuccess;
      this.imgSrc = this.successImgSrc;
      this.sharedService.setButtonConfig(this.routeLinkHelper([CustomerJourneyConstants.doneButtonSecondary]));
    }

    // Unable to watch specific channles package transfer success
    else if (this.codeType === ERoutingIds.enableWatchSpecificChannelpackageTransferSuccess) {
      this.sharedService.setHeaderConfig('', false, false);
      this.Section1Data = CustomerJourneyConstants.unableWatchSpecificChannelPackageTransferSuccess;
      this.imgSrc = this.successImgSrc;
      this.sharedService.setButtonConfig(this.routeLinkHelper([CustomerJourneyConstants.issueFixedButton, CustomerJourneyConstants.BackLocationLink]));
    }
    //#endregion Module 2

    //#region  Module 3
    //reset ccb pin successfully
    else if (this.codeType === ERoutingIds.noIssuePhoneResetCCBPinSuccessfully) {
      this.Section1Data = CustomerJourneyConstants.resetCCBPinsuccessfullyCase;
      this.imgSrc = this.successImgSrc;
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.packageUpdareRequestsuccessfullyButtons));
    }
    //change call forwarding number
    else if (this.codeType === ERoutingIds.noIssuePhoneChangeCallForwardSuccessfully) {
      this.Section1Data = CustomerJourneyConstants.changeCallForwardsuccessfullyCase;
      this.imgSrc = this.successImgSrc;
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.packageUpdareRequestsuccessfullyButtons));
    }

    // ont reboot successfully
    else if (this.codeType === ERoutingIds.ontRestartRequiredSuccessfully) {
      this.sharedService.setHeaderConfig('', false, false);
      this.Section1Data = CustomerJourneyConstants.ontRestartssuccessfullyCase;
      this.imgSrc = this.successImgSrc;
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.ontRestartSuccessfullyButtons));
    }
    //#endregion Module 3
    ///For Internet Password Reset
    else if (this.codeType === ERoutingIds.resetInternetPasswordSuccess) {
      this.sharedService.setHeaderConfig('', false, false);
      this.Section1Data = CustomerJourneyConstants.resetInternetPasswordSuccess;
      this.imgSrc = this.successImgSrc;
      this.sharedService.setButtonConfig(this.routeLinkHelper([CustomerJourneyConstants.doneButtonSecondary]));
    }
    // For Error Occured First Time
    else if (this.codeType === ERoutingIds.resetInternetPasswordError) {
      this.sharedService.setHeaderConfig('', false, false);
      this.Section1Data = CustomerJourneyConstants.errorOccured;
      this.imgSrc = this.warningImgSrc;
      this.buttonConfig = [CustomerJourneyConstants.tryAgainButton, CustomerJourneyConstants.closeButton];
      this.buttonConfig.forEach((elem) => {
        if (elem.title == 'BUTTONS.TRY_AGAIN') {
          elem.linkTo = '/internet-password-reset-fail';
        }
      });
      this.sharedService.setButtonConfig(this.routeLinkHelper(this.buttonConfig));
    }
    // For try Again Error
    else if (this.codeType === ERoutingIds.tryAgainError) {
      this.sharedService.setHeaderConfig('', false, false);
      this.Section1Data = CustomerJourneyConstants.tryAgainErrorOccured;
      this.imgSrc = this.warningImgSrc;
      this.buttonConfig = [CustomerJourneyConstants.closeButtonSecondary];
      this.sharedService.setButtonConfig(this.routeLinkHelper(this.buttonConfig));
    }
    // For reset Internet Password Success Detail
    else if (this.codeType === ERoutingIds.resetInternetPasswordSuccessDetail) {
      this.sharedService.setHeaderConfig('', false, false);
      this.Section1Data = CustomerJourneyConstants.resetInternetPasswordSuccessDetail;
      this.imgSrc = this.successImgSrc;
      this.buttonConfig = [CustomerJourneyConstants.buyEtisalatRouterButton, CustomerJourneyConstants.doneButtonSecondary];
      this.buttonConfig.forEach((elem) => {
        if (elem.title === 'BUTTONS.DONE') {
          elem.behaviour = 'link';
        }
      });
      this.sharedService.setButtonConfig(this.routeLinkHelper(this.buttonConfig));
    }
    // For reset Router Wifi Password Success
    else if (this.codeType === ERoutingIds.resetRouterWifiPasswordSuccess) {
      this.sharedService.setHeaderConfig('', false, false);
      this.Section1Data = CustomerJourneyConstants.resetRouterWifiPasswordSuccess;
      this.imgSrc = this.successImgSrc;
      this.buttonConfig = [CustomerJourneyConstants.doneButtonSecondary];
      this.sharedService.setButtonConfig(this.routeLinkHelper(this.buttonConfig));
    }
    // For unable to reach router
    else if (this.codeType === ERoutingIds.unableToReachRouter) {
      this.sharedService.setHeaderConfig('', false, false);
      this.Section1Data = CustomerJourneyConstants.unableToReachRouter;
      this.imgSrc = this.warningImgSrc;
      this.buttonConfig = [CustomerJourneyConstants.tryAgainButton, CustomerJourneyConstants.closeButton];
      this.buttonConfig.forEach((elem) => {
        if (elem.title == 'BUTTONS.TRY_AGAIN') {
          elem.linkTo = 'unable-to-reach-router-failed';
        }
      });
      this.sharedService.setButtonConfig(this.routeLinkHelper(this.buttonConfig));
    }
    // For unable to reach router failed
    else if (this.codeType === ERoutingIds.unableToReachRouterFailed) {
      this.sharedService.setHeaderConfig('', false, false);
      this.Section1Data = CustomerJourneyConstants.unableToReachRouterFailed;
      this.imgSrc = this.warningImgSrc;
      this.buttonConfig = [CustomerJourneyConstants.continueToTroubleshootButton, CustomerJourneyConstants.closeButton];
      this.sharedService.setButtonConfig(this.routeLinkHelper(this.buttonConfig));
    }
    // For unable to reset password
    else if (this.codeType === ERoutingIds.unableToResetPassword) {
      this.sharedService.setHeaderConfig('', false, false);
      this.Section1Data = CustomerJourneyConstants.unableToResetPassword;
      this.imgSrc = this.warningImgSrc;
      this.buttonConfig = [CustomerJourneyConstants.buyEtisalatRouterButton, CustomerJourneyConstants.closeButton];
      this.sharedService.setButtonConfig(this.routeLinkHelper(this.buttonConfig));
    }
    // For unable to process request
    else if (this.codeType === ERoutingIds.unableToProcessRequest) {
      this.sharedService.setHeaderConfig('', false, false);
      this.Section1Data = CustomerJourneyConstants.unableToProcessRequest;
      this.imgSrc = this.warningImgSrc;
      this.buttonConfig = [CustomerJourneyConstants.closeButton];
      this.sharedService.setButtonConfig(this.routeLinkHelper(this.buttonConfig));
    }
    //TODO: dummy need to remove this case at the end
    else {
      this.sharedService.setHeaderConfig('', false, false);
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
