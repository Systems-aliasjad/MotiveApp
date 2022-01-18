import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { ETISALAT_DEFAULT_CONFIG, LoaderScriptsEnum, NetWorkDiagramIds, TsOutcome } from 'src/app/shared/constants/constants';
import { IMotiveButton, IOntDetail, IPageHeader, IStbDetail } from 'src/app/shared/constants/types';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';
import { DeviceListDialog } from '../dialogs/device-list-dialog/device-list-dialog.component';

@Component({
  selector: 'app-phone-no-issues',
  template: `<app-diagnose-issue
    [networkDiagram]="networkDiagram"
    [etisalatConfig]="etisalatConfig"
    [ontConfig]="ontConfig"
    [connectedDevices]="connectedDevices"
    [headerConfig]="headerConfig"
    [messageSection]="messageSection"
    [button1]="button1"
    (button1Click)="button1Listener()"
    
    [button3]="button3"
    (button3Click)="button3Listener()"
  >
  </app-diagnose-issue>`,

  // [button2]="button2"
  //   (button2Click)="button2Listener()"
})
export class NoIssuesComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  etisalatConfig = ETISALAT_DEFAULT_CONFIG;
  ontConfig: IOntDetail;
  networkDiagram = NetWorkDiagramIds.FiveLayer;
  connectedDevices;
  isThirdParty: boolean = false;
  messageSection;
  button1: IMotiveButton = {
    title: 'BUTTONS.ISSUE_FIXED',
    type: 'primary',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.REBOOT_MY_DEVICES',
    type: 'secondary',
  };

  button3: IMotiveButton = {
    title: 'BUTTONS.CONTINUE_TO_TROUBLESHOOTING',
    type: 'link',
  };

  modal: any;
  constructor(
    private backendService: BackendService,
    private helperService: HelperService,
    private sharedService: SharedService,
    private router: Router,
    private modalCtrl: ModalController,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(() => {
      this.updateHeader();
      this.getIssueTilesData();
    });
    this.updatePageContent();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateHeader() {
    //this.sharedService.setHeaderConfig('MESSAGES.INTERNET_ISSUES', false);
  }

  headerConfig: IPageHeader = {
    pageTitle: 'MESSAGES.TV_ISSUES',
    showBackBtn: true,
  };

  // updatePageContent() {
  //   this.messageSection = CustomerJourneyConstants.noIssuesTVMessageSection;
  // }

  updatePageContent() {

if(this.sharedService.GetTsOutCome()===TsOutcome.IssueFoundAndFixed){
     this.messageSection = CustomerJourneyConstants.noIssuesTVMessageSection;
        this.messageSection.header='MESSAGES.ISSUE_FIXED_SUCCESSFULLY';
        this.messageSection.body[0].title='MESSAGES.WE_HAVE_FIXED_THE_TECHNICAL_ISSUES_YOUR_TV_SERVICE_SHOULD_BE_WORKING_NORMALLY';
    }
    else{
        this.messageSection = CustomerJourneyConstants.noIssuesTVMessageSection;
    }

    // this.messageSection = CustomerJourneyConstants.noIssuesTVMessageSection;
    
    
    
    const navigation = this.router.getCurrentNavigation();
    const showRebootButton = navigation?.extras?.state?.showRebootButton;
    this.isThirdParty = navigation?.extras?.state?.isThirdParty;
    if (showRebootButton === false) {
      this.button2 = this.button3;
      this.button2Listener = this.button3Listener;
      this.button3 = undefined;
    }
  }

  button1Listener() {
    this.sharedService.TicketCloseAPICallWithURL('thanks');
  }

  async button2Listener() {
    this.modal = await this.modalCtrl.create({
      component: DeviceListDialog,
      componentProps: {
        isThirdParty: this.isThirdParty,
      },
    });
    return await this.modal.present();
  }

  async button3Listener() {
    var scriptArray = this.sharedService.GetLoaderDataByID(LoaderScriptsEnum.IPTV_SERVICE_DETAIL);
    this.sharedService.setLoader(true,scriptArray);
    this.backendService.serviceDetailsSTB().subscribe((data: any) => {
      this.sharedService.setLoader(false);
      this.sharedService.setApiResponseData(data);
      this.sharedService.setApiResponseDataSTBContinue(data);

      this.router.navigate(['/issues/tv/detail']);
    });

    // this.modal = await this.modalCtrl.create({
    //   component: IssueListDialog,
    //   componentProps: {
    //     flow: EIssueFlow.tvIssue,
    //   },
    // });
    // return await this.modal.present();
  }

  getIssueTilesData() {
    const apiResponse = this.sharedService.getApiResponseData();
    const temp = this.helperService.networkDiagramStylingWrapperSTB(apiResponse?.ontDetails, apiResponse?.stbDetails);
    this.ontConfig = temp?.ontConfig;
    //  this.routerConfig = temp?.stbConfig;
    this.connectedDevices = temp?.stbConfig;
  }


  hard2={
	"code": 200,
	"message": "Success",
	"result": {
		"screenCode": "IPTVSD1",
		"statusMessage": "IPTV Service Display, 4G/5G flag is disabled",
		"validSignals": [
			"QA Package Transfer",
			"QA eLifeOn Password Reset",
			"QA STB Admin Pin Reset",
			"GS Session Release",
			"no"
		],
		"responseData": {
			"agmaStatus": "",
			"activeTVGames": "",
			"stbStatus": "316695150791#true",
			"packageStatus": "",
			"elifeResetPswd": "true",
			"stbList": null,
			"sharedPackages": [
				{
					"packageId": "431",
					"packageName": "eLife Western - 1st 3 months free",
					"shared": null,
					"channels": null
				},
				{
					"packageId": "100",
					"packageName": "Free TV Channels",
					"shared": null,
					"channels": null
				},
				{
					"packageId": "430",
					"packageName": "Unlimited Basic",
					"shared": null,
					"channels": null
				},
				{
					"packageId": "402",
					"packageName": "eLife TV- Video Pack",
					"shared": null,
					"channels": null
				},
				{
					"packageId": "411",
					"packageName": "Premium Video Packs (Standalone)",
					"shared": null,
					"channels": null
				},
				{
					"packageId": "201",
					"packageName": "STB-PVR",
					"shared": null,
					"channels": null
				}
			],
			"username": null,
			"elifeGameStatus": "false"
		}
	}
}
}
