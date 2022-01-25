import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { Location } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { BackendService } from 'src/app/services/backend.service';
import { flowCodes } from 'src/app/shared/constants/constants';

@Component({
  selector: 'specific-channel-package-transfer',
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
export class SpecificChannelPackageTransferComponent implements OnInit, OnDestroy {
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
  filteredList: any = [];
  cardList: any[] = [
  
  ];
  formGroup: FormGroup;
  constructor(
    private backendService: BackendService,
    private sharedService: SharedService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
      this.updateHeader();


     this.sharedService.setLoader(true);
     this.backendService.serviceDetailsSTB().subscribe((data: any) => {
      this.sharedService.setLoader(false);
      
      
        var apiResponse = this.sharedService.getApiResponseDataSTBContinue();
      
      var nonSharedPackage= apiResponse?.result?.responseData?.stbList;
      var sharedPackage= apiResponse?.result?.responseData?.sharedPackages;
    

      nonSharedPackage?.forEach((element) => {
        element?.packages?.forEach(pac => {
          var index = {
          title:  pac?.packageName, 
           description:'STB SR#' + element?.stbSerialNumber,
          ID: pac?.packageId,
        };

        this.filteredList.push(index);
        });

      });
///////////////For Shared Package
       sharedPackage?.forEach((element) => {
        var index = {
          title:element?.packageName,  
           description: '',
          ID: element?.packageId,
        };

        this.filteredList.push(index);
        });

     this.cardList = this.filteredList;
    });


  }

  ngOnDestroy(): void {
  }

  updateHeader() {
    // this.sharedService.setHeaderConfig('HEADER.TRANSFER_PACKAGE', false, true);
    this.pageContent = 'MESSAGES.PLEASE_SELECT_THE_PACKAGE_YOU_ARE_FACING_ISSUE';
  }

  headerConfig: IPageHeader = {
    pageTitle: 'MESSAGES.SELECT_PACKAGE',
    showBackBtn: true,
  };

  button1Listener(_event) {
    this.formGroup = _event;
    var data = {
      packageId: _event?.value?.radioButton, ////Soure Sellected Package
    };

  this.sharedService.setLoader(true);
    this.backendService.specificChannelStage3(data).subscribe((data: any) => {
    this.sharedService.setLoader(false);
    if (data?.result?.screenCode === flowCodes.QAIPTVCL1) {
       this.sharedService.setApiResponseData(data);
       this.router.navigate(['issues/tv/unable-to-watch-specific-channel']);
    } else {
      this.router.navigate(['/error-comes']);
    }
    });

  }

  button2Listener() {

     this.router.navigate(['/thanks']);
     
  }
}
