import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { ERoutingIds } from '../../constants/constants';
import { CustomerJourneyConstants } from '../../constants/CustomerJourneyConstants';
import { IButton } from '../../constants/types';
import { InternetIssuesDialogSecondComponent } from '../../dialogs/internet-issues-dialog-second/internet-issues-dialog-second.component';
import { InternetIssuesDialog } from '../../dialogs/internet-issues-dialog/internet-issues-dialog.component';
import { RestartRouterDialog } from '../../dialogs/restart-router-dialog/restart-router-dialog.component';
import { RestartTvboxDialog } from '../../dialogs/restart-tvbox-dialog/restart-tvbox-dialog.component';
import { SharedService } from '../../shared.service';
import { IMotiveButton } from '../diagnose-issue/diagnose-issue.component';

export interface IDeviceCareContent {
  imgSrc: string;
  header1: string;
  header2?: string;
  body1: string;
  body2?: string;
  bullet1?: string[];
  bullet2?: string[];
}
@Component({
  selector: 'app-device-care',
  templateUrl: './device-care.component.html',
  styleUrls: ['./device-care.component.scss'],
})
export class DeviceCareComponent implements OnInit {
  selectedLang: string;
  codeType;
  myBtnSize: string;
  @Input()
  deviceCareContent: IDeviceCareContent;
  @Input()
  button1: IMotiveButton;
  @Output()
  button1Click = new EventEmitter();

  @Input()
  button2: IMotiveButton;
  @Output()
  button2Click = new EventEmitter();

  @Input()
  button3: IMotiveButton;
  @Output()
  button3Click = new EventEmitter();

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

  buttonsConfig: IButton[] = [
    {
      title: 'BUTTONS.ISSUE_FIXED',
      clickListener: () => {
        this.router.navigate(['/thanks']);
      },
      linkTo: '',
      behaviour: 'primary',
    },
    {
      title: 'BUTTONS.CONTINUE_TO_TROUBLESHOOTING',
      clickListener: () => {
        this.continueTroubleShoot();
      },
      linkTo: '',
      behaviour: 'link',
    },
  ];

  button1Listener() {
    this.button1Click.emit();
  }

  button2Listener() {
    this.button2Click.emit();
  }

  button3Listener() {
    this.button3Click.emit();
  }

  constructor(private sharedService: SharedService, private modalCtrl: ModalController, public router: Router, private actRoute: ActivatedRoute) {}

  ngOnInit() {
    this.myBtnSize = this.button3 ? '6' : '12';
  }

  initialization() {
    this.sharedService.setDefaultValues();
    if (this.codeType === ERoutingIds.tvBoxRestartRequiredDeviceCare) {
      // this.sharedService.setHeaderConfig('HEADER.DEVICE_CARE', true);
      // this.deviceCareContent.header1 = 'DEVICE_CARE.TVBOX_RESTART_HEADING';
      // this.deviceCareContent.body1 = 'DEVICE_CARE.TVBOX_RESTART_CONTENT';
      // this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.tvBoxRestartDeviceCareButtons));
    } else if (this.codeType === ERoutingIds.routerDeviceCare) {
      this.sharedService.setHeaderConfig('HEADER.DEVICE_CARE', true);
      this.deviceCareContent.header1 = 'DEVICE_CARE.PAGE_HEADING';
      this.deviceCareContent.body1 = 'DEVICE_CARE.PAGE_CONTENT';
      this.sharedService.setButtonConfig(this.buttonsConfig);
    } else if (this.codeType === ERoutingIds.enableWatchChannelContinueTroubleshoot) {
      // this.sharedService.setHeaderConfig('HEADER.UNABLE_TO_WATCH_DEVICE_CARE', true);
      // this.deviceCareContent.header1 = 'DEVICE_CARE.UNABLE_TO_WATCH_CHANNELS';
      // this.deviceCareContent.body1 = 'DEVICE_CARE.UNABLE_TO_WATCH_CHANNELS_CONTENT';
      // this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.unableWatchChannelsDeviceCareButtons));
    }
    //Router not reachable own router
    else if (this.codeType === ERoutingIds.routerNotReachableOwnRouter) {
      this.sharedService.setHeaderConfig('HEADER.DEVICE_CARE', true);
      this.deviceCareContent.header1 = 'DEVICE_CARE.PAGE_HEADING';
      this.deviceCareContent.body1 = 'DEVICE_CARE.PAGE_CONTENT';
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.routerNotReachableDeviceCareOwnRouterButtons));
    }

    //Router not reachable own router deivce care
    else if (this.codeType === ERoutingIds.routerNotReachableOwnRouterCare) {
      this.sharedService.setHeaderConfig('HEADER.DEVICE_CARE', true);
      this.deviceCareContent.header1 = 'DEVICE_CARE.PAGE_HEADING';
      this.deviceCareContent.body1 = 'DEVICE_CARE.PAGE_CONTENT';
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.routerNotReachableDeviceCareOwnRouterButtons));
    }

    //#region  Modle 3
    //unable to make phone calls
    else if (this.codeType === ERoutingIds.noIssuePhoneUnablePhoneCalls) {
      this.sharedService.setHeaderConfig('HEADER.DEVICE_CARE', true);
      this.deviceCareContent.header1 = 'DEVICE_CARE.PAGE_HEADING';
      this.deviceCareContent.body1 = 'DEVICE_CARE.PAGE_CONTENT';
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.routerNotReachableDeviceCareOwnRouterButtons));
    }
    //ont restart manually
    else if (this.codeType === ERoutingIds.ontRestartRequiredDeviceCare) {
      this.sharedService.setHeaderConfig('HEADER.DEVICE_CARE', true);
      this.deviceCareContent.header1 = 'DEVICE_CARE.PAGE_HEADING';
      this.deviceCareContent.body1 = 'DEVICE_CARE.PAGE_CONTENT';
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.ontRestartManuualDeviceCareOwnRouterButtons));
    }

    console.log('=========deviceCareContent===========');
    console.log(this.deviceCareContent);
    console.log('====================================');
    //#endregion Module 3
  }

  async continueTroubleShoot() {
    const modal = await this.modalCtrl.create({
      component: RestartRouterDialog,
    });
    return await modal.present();
  }

  async openRestartTvBoxDialog() {
    const modal = await this.modalCtrl.create({
      component: RestartTvboxDialog,
    });
    return await modal.present();
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  async AppInternetIssuesDialog() {
    const modal = await this.modalCtrl.create({
      component: InternetIssuesDialog,
    });
    return await modal.present();
  }

  async RouterNotReachableAppInternetIssuesDialog() {
    const modal = await this.modalCtrl.create({
      component: InternetIssuesDialog,
      componentProps: {
        id: ERoutingIds.routerNotReachable,
      },
    });
    return await modal.present();
  }

  async RouterNotReachableOwnRouterAppInternetIssuesDialog() {
    const modal = await this.modalCtrl.create({
      component: InternetIssuesDialogSecondComponent,
      componentProps: {
        id: ERoutingIds.routerNotReachableOwnRouter,
      },
    });
    return await modal.present();
  }
}
