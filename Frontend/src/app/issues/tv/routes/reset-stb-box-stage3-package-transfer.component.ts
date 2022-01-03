import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { SharedService } from 'src/app/shared/shared.service';
import { FormGroup } from '@angular/forms';
import { BackendService } from 'src/app/services/backend.service';
import { flowCodes } from 'src/app/shared/constants/constants';

@Component({
  selector: 'reset-stb-stage3-packagetransfer',
  template: `<app-transfer-package
    [headerConfig]="headerConfig"
    [pageContent]="pageContent"
    [cardList]="cardList"
    [button1]="button1"
    (button1Click)="button1Listener($event)"
    [button2]="button2"
    (button2Click)="button2Listener()"
  ></app-transfer-package>`,
})
export class ResetStbStage3TransferComponent implements OnInit, OnDestroy {
  pageContent: string;
  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.CONTINUE',
    explanatoryNote: '',
  };

  button2: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.CLOSE',
    explanatoryNote: '',
  };
  selectedCard;
  cardList: any[] = [];
  formGroup: FormGroup;
  constructor(private backendService: BackendService, private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.updateHeader();
    var apiResponse = this.sharedService.getApiResponseDataNoIssuesSTB();
    var ListStbDetails = apiResponse?.stbDetails;
    ListStbDetails?.forEach((element) => {
      var index = {
        title: 'STB SR#' + element?.stbSerialNumber,
        description: 'MAC ' + element?.stbMac,
        ID: element?.stbSerialNumber,
      };
      this.cardList.push(index);
      console.log(index);
    });
  }

  ngOnDestroy(): void {}

  updateHeader() {
    // this.sharedService.setHeaderConfig('HEADER.TRANSFER_PACKAGE', false, true);
    this.pageContent = 'MESSAGES.CHOOSE_THE_STB_YOU_WANT_TO_RESET';
  }

  headerConfig: IPageHeader = {
    pageTitle: 'MESSAGES.RESET_STB_PIN',
    showBackBtn: true,
  };

  button1Listener(_event) {
   
    this.formGroup = _event;
  var data = {
      stage3SelectedSTB: this.formGroup.controls['radioButton'].value, ///Selected STB
    };

    this.sharedService.setLoader(true, 'MESSAGES.YOUR_TV_BOX_IS_BEING_RESET');
    this.backendService.transferPackageNextStep(data).subscribe((data: any) => {
      this.sharedService.setLoader(false);
      if (data?.result?.screenCode === flowCodes.STBR1 || data?.result?.screenCode === flowCodes.STBR2) {
        this.router.navigate(['issues/tv/tvBox-reset-successfull']);
      } else {
        this.sharedService.TicketCloseAPICallWithURL('error-comes');
      }
    });
  }

  button2Listener() {
    this.sharedService.TicketCloseAPICallWithURL('thanks');
  }
}
