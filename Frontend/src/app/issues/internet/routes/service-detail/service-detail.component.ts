import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { SVGs } from 'src/app/shared/constants/constants';
import { IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { EIssueFlow, IssueListDialog } from 'src/app/shared/dialogs/issue-list-dialog/issue-list-dialog.component';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss'],
})
export class ServiceDetailComponent implements OnInit, OnDestroy {
  routerDefault = SVGs.router.default;
  fiberBoxDefault = SVGs.ont.default;

  @Input()
  isPartialLoaded: boolean = false;
  devices;
  hsiUploadDownload;
  internetCallingPlan;
  internetConnectionStatus = 'Connected';
  speedTestResult;
  dataTraffic;
  routerName;
  modal: any;
  subscription: Subscription;
  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.ISSUE_FIXED',
  };

  button2: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.CONTINUE_TO_TROUBLESHOOTING',
  };

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.SERVICE_DEATAIL',
    showBackBtn: true,
  };

  constructor(
    private sharedService: SharedService,
    private router: Router,
    private modalCtrl: ModalController,
    private activatedRoute: ActivatedRoute,
    private helperService: HelperService,
    private backendService: BackendService
  ) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(() => {
      this.updatePageContent();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updatePageContent() {
    const apiResponse = this.sharedService.getApiResponseData();
    const internetGenericResponse = this.sharedService.getInternetGenericResponse();
    this.routerName = internetGenericResponse?.routerDetails?.routerManufacturer + ' ' + internetGenericResponse?.routerDetails?.routerModel;
    this.devices = this.helperService.connectedDeviceModifier(apiResponse?.connectedDevices);
    this.hsiUploadDownload = apiResponse?.hsiUploadDownload;
    // Internet Calling Plan response only 1 known 
    this.internetCallingPlan = apiResponse?.internetCallingPlan === 'No_Voip_rate_plan' ? 'MESSAGES.NOT_SUBSCRIBED' : 'MESSAGES.SUBSCRIBED' ;
    this.internetConnectionStatus = apiResponse?.internetConnectionStatus;
    this.speedTestResult = apiResponse?.speedTestResult ?? '';
    if(this.speedTestResult !== ''){
      this.speedTestResult = 'Upload Speed 450Mbps ,Download Speed 400Mbps';
      const speed = this.speedTestResult.match(/\d+/g);
      const download = this.hsiUploadDownload[1].match(/\d+/g);
      const speedTest = (speed [1]/download)*100;
      this.speedTestResult =  speedTest > 90 || speedTest === 90 ? 'Good' : 'Bad';
    }
    this.dataTraffic = apiResponse?.dataTraffic ?? '';
  }

  button1Listener() {
    //  this.sharedService.setLoader(true);
    this.backendService.bookComplaint({ mobileNo: localStorage.getItem('CUS_MOBILE_NO'), remarks: '', ci7: true }).subscribe(() => {
      //  this.sharedService.setLoader(false);
    });
    this.router.navigate(['/thanks']);
  }

  async button2Listener() {
    this.modal = await this.modalCtrl.create({
      component: IssueListDialog,
      componentProps: {
        flow: EIssueFlow.internetIssue,
        showICB: this.internetCallingPlan === 'MESSAGES.NOT_SUBSCRIBED' ? false : true,
      },
    });
    return await this.modal.present();
  }
}
