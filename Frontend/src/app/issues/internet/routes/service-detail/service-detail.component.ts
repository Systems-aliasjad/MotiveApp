import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
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
  @Input()
  isPartialLoaded: boolean = false;
  devices;
  modal: any;
  subscription: Subscription;
  cardList: any[] = [
    {
      heading: 'UNNAMED PHONE',
      IP: '192.168.1.125',
    },
    {
      heading: 'UNNAMED COMPUTER',
      IP: '192.168.1.125',
    },
    {
      heading: 'UNNAMED SMART WATCH',
      IP: '192.168.1.125',
    },
    {
      heading: 'UNNAMED TABLET',
      IP: '192.168.1.125',
    },
    {
      heading: 'UNNAMED PHONE',
      IP: '192.168.1.125',
    },
  ];

  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.ISSUE_FIXED',
  };

  button2: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.CONTINUE_TO_TROUBLESHOOTING',
  };

  constructor(
    private sharedService: SharedService,
    private router: Router,
    private modalCtrl: ModalController,
    private activatedRoute: ActivatedRoute,
    private helperService: HelperService
  ) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(() => {
      this.updateHeader();
    });
    this.updatePageContent();
    this.devices = this.helperService.connectedDeviceModifier([
      {
        addressSource: 'DHCP',
        isActive: '1',
        ipAddress: '192.168.1.101',
        leaseTimeRemaining: '21856',
        hostName: '',
        macAddress: 'a6:8d:22:64:e9:b3',
        interfaceType: '802.11',
      },
    ]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateHeader() {
    if (!this.isPartialLoaded) {
      //this.sharedService.setHeaderConfig('HEADER.SERVICE_DEATAIL', false);
    }
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.SERVICE_DEATAIL',
    showBackBtn: true,
  };

  updatePageContent() {}

  button1Listener() {
    this.router.navigate(['/thanks']);
  }

  async button2Listener() {
    this.modal = await this.modalCtrl.create({
      component: IssueListDialog,
      componentProps: {
        flow: EIssueFlow.internetIssue,
      },
    });
    return await this.modal.present();
  }
}
