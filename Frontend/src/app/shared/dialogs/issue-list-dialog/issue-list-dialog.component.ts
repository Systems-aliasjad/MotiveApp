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
  flow: number;
  showViewGuidline: boolean = true;
  modal;
  internetIssuesList: any[] = [
    {
      issue: 'Unable to connect Wi-Fi',
      route: 'issues/internet/stage2/reset-wifi-password',
    },
    {
      issue: 'Unable to browse the internet',
      route: 'issues/internet/unable-to-browse-internet/step1',
    },
    {
      issue: 'Forgot my Wi-Fi password',
      route: 'issues/internet/stage2/reset-wifi-password',
    },
    {
      issue: 'Unable to connect to home zone',
      route: 'issues/internet/unable-to-connect-to-homezone', //device-connected-homezone',
    },
    {
      issue: 'Unable to make video calls',
      route: 'issues/internet/unable-video-call',
    },
    {
      issue: 'Unable to connect new device to Wi-Fi',
      route: 'issues/internet/unable-connect-newDevice',
    },
  ];
  tvIssuesList: any[] = [
    {
      issue: 'Forgot my TV admin PIN',
      route: '',
      customEvent: 'openResetTvDialog',
    },
    {
      issue: 'Unable to log in to eLifeON',
      route: 'issues/tv/unable-to-login-elife',
    },
    {
      issue: 'Facing problems while playing a game',
      route: 'issues/tv/game-session',
    },
    {
      issue: 'Transfer channel to another TV box',
      route: 'issues/tv/transfer-channel-to-another-tvBox',
    },
    // {
    //   issue: 'Unable to watch a specific channel',
    //   route: 'issues/tv/unable-to-watch-specific-channel',
    // },
    {
      issue: 'Unable to watch any channel',
      route: 'issues/tv/unable-watch-channel',
    },
  ];
  passwordIssueList: any[] = [
    {
      issue: 'Reset internet password',
      description: 'Find our how to change your password',
      route: '/issues/internet/internet-password-reset',
      nextSignal: QUICK_ACTION.RESET_INTERNET_PASSWORD,
      directCall: true,
      ProductID: 1,
    },
    {
      issue: "Reset router's Wi-Fi password",
      description: "Tap here if you forgot your router's Wi-Fi password",
      route: '/issues/internet/stage2/reset-wifi-password',
      nextSignal: QUICK_ACTION.UPDATE_WIFI_CONFIGURATION,
      ProductID: 2,
    },
    {
      issue: 'Reset TV admin PIN',
      description: 'Find out how to reset your TV box PIN',
      route: '/issues/tv/quick-reset-admin-pin-package-transfer',
      nextSignal: QUICK_ACTION.RESET_STB_ADMIN_PIN,
      ProductID: 3,
    },
    {
      issue: 'Reset eLifeON PIN',
      description: "Tap here if you're unable to log in to eLifeON",
      route: '/issues/tv/unable-to-login-elife',
      nextSignal: QUICK_ACTION.RESET_ELIFEON_PASSWORD,
      directCall: true,
      ProductID: 4,
    },
    {
      issue: 'Reset CCB PIN',
      description: 'Find out how to reset your Code Control Barring PIN',
      route: 'issues/phone/forgot-ccb-pin',
      nextSignal: QUICK_ACTION.RESET_CCP_PIN_CODE,
      ProductID: 5,
    },
  ];
  phoneIssuesList: any[] = [
    {
      issue: 'Unable to make/receive calls',
      route: '/issues/phone/unable-to-call/device-care',
    },
    {
      issue: 'No dial tone',
      route: '/issues/phone/no-dail-tone/device-care',
    },
    {
      issue: 'Problem with Value-Added Service ',
      route: 'issues/phone/no-issue-phone-value-added',
    },
    {
      issue: 'Forgot Code Control Barring (CCB) PIN',
      route: 'issues/phone/forgot-ccb-pin',
    },
    // {
    //   issue: 'Change call forwarding number',
    //   route: 'issues/phone/no-issue-phone-phone-Change-call-forward',
    // },
  ];
  issuesList: any[];

  constructor(protected sharedService: SharedService, private backendService: BackendService, private modalCtrl: ModalController, private router: Router) {}

  ngOnInit() {
    if (this.flow === EIssueFlow.internetIssue) {
      this.issuesList = this.internetIssuesList;
    } else if (this.flow === EIssueFlow.tvIssue) {
      this.issuesList = this.tvIssuesList;
    } else if (this.flow === EIssueFlow.passwordIssue) {
      this.issuesList = this.sharedService.createPasswrodIssuesDynamic(this.passwordIssueList);
      //this.issuesList = this.passwordIssueList;
      this.showViewGuidline = false;
    } else if (this.flow === EIssueFlow.phoneIssue) {
      this.issuesList = this.phoneIssuesList;
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
      this.router.navigate([item?.route], { state: { quickLinkNextSignal: item?.nextSignal } });
      //
    } else if (item.customEvent) {
      this[item.customEvent]();
    }
  }
  callDirectCallAPIs(item) {
    this.dismiss();
    if (item?.nextSignal === QUICK_ACTION.RESET_ELIFEON_PASSWORD) {
      this.sharedService.setLoader(true, 'MESSAGES.WE_ARE_RESETTING_YOUR_WIFI_PASSWORD');
      this.backendService.quickActionsInitialData().subscribe((res) => {
        this.sharedService.setLoader(false);
        this.sharedService.setQuickLinksData(res?.result?.responseData);
        this.sharedService.setApiResponseData(res?.result?.responseData);

        this.sharedService.setLoader(true, 'MESSAGES.WE_ARE_RESETTING_YOUR_WIFI_PASSWORD');
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
