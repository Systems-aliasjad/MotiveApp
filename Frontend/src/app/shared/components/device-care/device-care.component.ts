import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ERoutingIds } from '../../constants/constants';
import { CustomerJourneyConstants } from '../../constants/CustomerJourneyConstants';
import { IButton } from '../../constants/types';
import { RestartRouterDialog } from '../../dialogs/restart-router-dialog/restart-router-dialog.component';
import { RestartTvboxDialog } from '../../dialogs/restart-tvbox-dialog/restart-tvbox-dialog.component';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-device-care',
  templateUrl: './device-care.component.html',
  styleUrls: ['./device-care.component.scss'],
})
export class DeviceCareComponent implements OnInit {
  selectedLang: string;
  codeType;
  pageHeading;
  PageContent;

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
  constructor(private sharedService: SharedService, private modalCtrl: ModalController, public router: Router, private actRoute: ActivatedRoute) {
    this.actRoute.data.subscribe((data) => {
      this.codeType = data.id;
    });

    actRoute.params.subscribe((params) => {
      this.initialization();
    });
  }

  ngOnInit() {}

  initialization() {
    if (this.codeType === ERoutingIds.tvBoxRestartRequiredDeviceCare) {
      this.sharedService.setHeaderConfig('HEADER.DEVICE_CARE', true);
      this.pageHeading = 'DEVICE_CARE.TVBOX_RESTART_HEADING';
      this.PageContent = 'DEVICE_CARE.TVBOX_RESTART_CONTENT';
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.tvBoxRestartDeviceCareButtons));
    } else if (this.codeType === ERoutingIds.routerDeviceCare) {
      this.sharedService.setHeaderConfig('HEADER.DEVICE_CARE', true);
      this.pageHeading = 'DEVICE_CARE.PAGE_HEADING';
      this.PageContent = 'DEVICE_CARE.PAGE_CONTENT';
      this.sharedService.setButtonConfig(this.buttonsConfig);
    } else if (this.codeType === ERoutingIds.enableWatchChannelContinueTroubleshoot) {
      this.sharedService.setHeaderConfig('HEADER.UNABLE_TO_WATCH_DEVICE_CARE', true);
      this.pageHeading = 'DEVICE_CARE.UNABLE_TO_WATCH_CHANNELS';
      this.PageContent = 'DEVICE_CARE.UNABLE_TO_WATCH_CHANNELS_CONTENT';
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.unableWatchChannelsDeviceCareButtons));
    }
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
}
