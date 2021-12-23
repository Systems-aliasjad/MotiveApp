import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BackendService } from 'src/app/services/backend.service';
import { ResetTvPinDialog } from '../../../issues/tv/dialogs/reset-tv-pin-dialog/reset-tv-pin-dialog.component';
import { flowCodes, QUICK_ACTION } from '../../constants/constants';
import { SharedService } from '../../shared.service';

export enum EIssueFlow {
  internetIssue,
  tvIssue,
  passwordIssue,
  phoneIssue,
}
@Component({
  selector: 'issue-list-dialog',
  templateUrl: './issue-list-dialog.component.html',
  styleUrls: ['./issue-list-dialog.component.scss'],
})
export class IssueListDialog implements OnInit {
  @Input()
  showResetCCBPin: boolean = true;
  @Input()
  showICB: boolean = true;

  @Input()
  flow: number;
  @Input()
  eLifeGameStatus: boolean = false;
  showViewGuidline: boolean = true;
  modal;
  internetIssuesList: any[] = [
    {
      issue: 'MESSAGES.UNABLE_TO_CONNECT_WIFI',
      route: 'issues/internet/unable-to-connnect-wifi-network',
      value: 'connectWifiFail',
    },
    {
      issue: 'MESSAGES.UNABLE_TO_BROWSE_THE_INTERNET',
      route: 'issues/internet/unable-to-browse-internet/step1',
    },
    {
      issue: 'MESSAGES.FORGOT_MY_WIFI_PASSWORD',
      route: 'issues/internet/unable-to-connnect-wifi-network',
      value: 'forgotPassword',
    },
    {
      issue: 'MESSAGES.UNABLE_TO_CONNECT_TO_HOME_ZONE',
      route: 'issues/internet/unable-to-connect-to-homezone', //device-connected-homezone',
    },
    {
      issue: 'MESSAGES.UNABLE_TO_MAKE_VIDEO_CALLS',
      route: 'issues/internet/unable-video-call',
    },
    {
      issue: 'MESSAGES.UNABLE_TO_CONNECT_NEW_DEVICE_TO_WIFI',
      route: 'issues/internet/unable-connect-newDevice',
    },
  ];
  tvIssuesList: any[] = [
    {
      issue: 'MESSAGES.FORGOT_MY_TV_ADMIN_PIN',
      route: '',
      customEvent: 'openResetTvDialog',
    },
    {
      issue: 'MESSAGES.UNABLE_TO_LOG_IN_TO_ELIFEON',
      route: 'issues/tv/unable-to-login-elife',
    },
    // {
    //   issue: 'Facing problems while playing a game',
    //   route: 'issues/tv/game-session',
    // },
    {
      issue: 'MESSAGES.TRANSFER_CHANNEL_TO_ANOTHER_TV_BOX',
      route: 'issues/tv/transfer-channel-to-another-tvBox',
    },
    // {
    //   issue: 'MESSAGES.UNABLE_TO_WATCH_A_SPECIFIC_CHANNEL',
    //   route: 'issues/tv/unable-to-watch-specific-channel',
    // },
    {
      issue: 'MESSAGES.UNABLE_TO_WATCH_ANY_CHANNEL',
      route: 'issues/tv/unable-watch-channel',
    },
  ];
  tvIssuesList1: any[] = [
    {
      issue: 'MESSAGES.FORGOT_MY_TV_ADMIN_PIN',
      route: '',
      customEvent: 'openResetTvDialog',
    },
    {
      issue: 'MESSAGES.TRANSFER_CHANNEL_TO_ANOTHER_TV_BOX',
      route: 'issues/tv/transfer-channel-to-another-tvBox',
    },
    // {
    //   issue: 'MESSAGES.UNABLE_TO_WATCH_A_SPECIFIC_CHANNEL',
    //   route: 'issues/tv/unable-to-watch-specific-channel',
    // },
    {
      issue: 'MESSAGES.UNABLE_TO_WATCH_ANY_CHANNEL',
      route: 'issues/tv/unable-watch-channel',
    },
  ];
  passwordIssueList: any[] = [
    {
      issue: 'MESSAGES.RESET_INTERNET_PASSWORD',
      description: 'MESSAGES.FIND_OUR_HOW_TO_CHANGE_YOUR_PASSWORD',
      route: '/issues/internet/internet-password-reset',
      nextSignal: QUICK_ACTION.RESET_INTERNET_PASSWORD,
      directCall: true,
      ProductID: 1,
    },
    {
      issue: "MESSAGES.RESET_ROUTERS_WIFI_PASSWORD",
      description: "MESSAGES.TAP_HERE_IF_YOU_FORGOT_YOUR_ROUTERS_WIFI_PASSWORD",
      route: '/issues/internet/stage2/reset-wifi-password',
      nextSignal: QUICK_ACTION.UPDATE_WIFI_CONFIGURATION,
      ProductID: 2,
    },
    {
      issue: 'MESSAGES.RESET_TV_ADMIN_PIN',
      description: 'MESSAGES.FIND_OUT_HOW_TO_RESET_YOUR_TV_BOX_PIN',
      route: '/issues/tv/quick-reset-admin-pin-package-transfer',
      nextSignal: QUICK_ACTION.RESET_STB_ADMIN_PIN,
      ProductID: 3,
    },
    {
      issue: 'MESSAGES.RESET_ELIFEON_PIN',
      description: "MESSAGES.TAP_HERE_IF_YOURE_UNABLE_TO_LOG_IN_TO_ELIFEON",
      route: '/issues/tv/unable-to-login-elife',
      nextSignal: QUICK_ACTION.RESET_ELIFEON_PASSWORD,
      directCall: true,
      ProductID: 4,
    },
    {
      issue: 'MESSAGES.RESET_CCB_PIN',
      description: 'MESSAGES.FIND_OUT_HOW_TO_RESET_YOUR_CODE_CONTROL_BARRING_PIN',
      route: 'issues/phone/forgot-ccb-pin',
      nextSignal: QUICK_ACTION.RESET_CCP_PIN_CODE,
      ProductID: 5,
    },
  ];
  phoneIssuesList: any[] = [
    {
      issue: 'MESSAGES.UNABLE_TO_MAKE_RECEIVE_CALLS',
      route: '/issues/phone/unable-to-call/device-care',
      ID: 1,
    },
    {
      issue: 'MESSAGES.NO_DIAL_TONE',
      route: '/issues/phone/no-dail-tone/device-care',
      ID: 2,
    },
    // {
    //   issue: 'MESSAGES.PROBLEM_WITH_VALUE_ADDED_SERVICE ',
    //   route: 'issues/phone/no-issue-phone-value-added',
    //  ID: 3,
    // },
    {
      issue: 'MESSAGES.FORGOT_CODE_CONTROL_BARRING_CCB_PIN',
      route: 'issues/phone/forgot-ccb-pin',
      ID: 4,
    },
    // {
    //   issue: 'MESSAGES.CHANGE_CALL_FORWARDING_NUMBER',
    //   route: 'issues/phone/no-issue-phone-phone-Change-call-forward',
    //   ID: 5,
    // },
  ];
  issuesList: any[];

  constructor(protected sharedService: SharedService, private backendService: BackendService, private modalCtrl: ModalController, private router: Router) {}

  ngOnInit() {
    if (this.flow === EIssueFlow.internetIssue) {
      var list = this.internetIssuesList;
      if (!this.showICB) {
        list = list.filter((x) => x.route !== 'issues/internet/unable-video-call');
        this.issuesList = list;
      } else {
        this.issuesList = this.internetIssuesList;
      }
      if (!this.sharedService.getHomeZoneFlag()) {
        list = list.filter((x) => x.route !== 'issues/internet/unable-to-connect-to-homezone');
        this.issuesList = list;
      }
    } else if (this.flow === EIssueFlow.tvIssue) {
      // this.issuesList = this.eLifeGameStatus === true ? this.tvIssuesList : this.tvIssuesList1;
       this.issuesList = this.tvIssuesList;
      this.showViewGuidline = false;
    } else if (this.flow === EIssueFlow.passwordIssue) {
      this.issuesList = this.sharedService.createPasswrodIssuesDynamic(this.passwordIssueList);
      //this.issuesList = this.passwordIssueList;
      this.showViewGuidline = false;
    } else if (this.flow === EIssueFlow.phoneIssue) {
      if (!this.showResetCCBPin) {
        var list = this.phoneIssuesList.filter((x) => x.ID != 4);
        this.issuesList = list;
      } else {
        this.issuesList = this.phoneIssuesList;
      }

      this.showViewGuidline = false;
    }
  }

  async openResetTvDialog() {
    this.modal = await this.modalCtrl.create({
      component: ResetTvPinDialog,
    });
    return await this.modal.present();
  }

  onIssueClick(item) {
    if (item.directCall) {
      this.callDirectCallAPIs(item);
    } else if (item.route != '') {
      this.dismiss();
      this.router.navigate([item?.route], { state: { quickLinkNextSignal: item?.nextSignal, value: item?.value, fromPasswordDialog: true } });
      //
    } else if (item.customEvent) {
      this[item.customEvent]();
    }
  }
  callDirectCallAPIs(item) {
    this.dismiss();
    if (item?.nextSignal === QUICK_ACTION.RESET_ELIFEON_PASSWORD) {
      this.sharedService.setLoader(true, 'MESSAGES.WE_ARE_RESETTING_YOUR_ELIFEON_PIN');
      this.backendService.quickActionsInitialData().subscribe((res) => {
        this.sharedService.setLoader(false);
        this.sharedService.setQuickLinksData(res?.result?.responseData);
        this.sharedService.setApiResponseData(res?.result?.responseData);

        this.sharedService.setLoader(true, 'MESSAGES.WE_ARE_RESETTING_YOUR_ELIFEON_PIN');
        this.backendService.quickActionsNextStep(item?.nextSignal).subscribe((data) => {
          this.sharedService.setLoader(false);
          if (data?.result?.screenCode === flowCodes.QAIPTVELON) {
            this.router.navigate(['issues/tv/reset-elife-pin-success'], { state: { userID: data?.responseData?.userID } });
          } else if (data?.result?.screenCode === flowCodes.QAIPTVELON1) {
            this.router.navigate(['issues/password/unable-to-process-request']);
          } else {
            //if (data?.result?.screenCode === flowCodes.QAIPTVELON1) {
            this.router.navigate(['issues/tv/unable-elife-error-occur-try-again-later']);
          }
        });
      });
    } else if (item?.nextSignal === QUICK_ACTION.RESET_INTERNET_PASSWORD) {
      this.sharedService.setLoader(true, 'MESSAGES.WE_ARE_RESETTING_YOUR_WIFI_PASSWORD');
      this.backendService.quickActionsInitialData().subscribe((res) => {
        this.sharedService.setLoader(false);
        this.sharedService.setQuickLinksData(res?.result?.responseData);
        this.sharedService.setApiResponseData(res?.result?.responseData);

        this.sharedService.setLoader(true, 'MESSAGES.WE_ARE_RESETTING_YOUR_WIFI_PASSWORD');
        this.backendService.quickActionsNextStep(item?.nextSignal).subscribe((data) => {
          this.sharedService.setLoader(false);
          if (data?.result?.screenCode === flowCodes.QAHSIPR) {
            this.router.navigate(['/issues/internet/password-reset-success']);
          } else {
            //if (data?.result?.screenCode === flowCodes.QAHSIPR1) {
            this.router.navigate(['/issues/internet/reset-internet-passowrd-error-occur-try-again-later']);
          }
          // else {
          //   this.router.navigate(['/unknown-issue']);
          // }
        });
      });
    }
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  openDeviceCare() {
    this.dismiss();
    this.router.navigate(['/issues/internet/device-care']);
  }
}
