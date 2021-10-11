import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ETISALAT_DEFAULT_CONFIG } from 'src/app/shared/constants/constants';
import { IPageHeader } from 'src/app/shared/constants/types';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { SharedService } from '../../../../shared/shared.service';

@Component({
  selector: 'app-phone-issues-problem-value-added',
  templateUrl: './phone-issues-problem-value-added.component.html',
  styleUrls: ['./phone-issues-problem-value-added.component.scss'],
})
export class PhoneIssuesProblemValueAddedComponent implements OnInit, OnDestroy {
  codeType;
  subscription: Subscription;
  cardList;
  @Input()
  isPartialLoaded: boolean = false;

  ontConfig;
  routerConfig;
  etisalatConfig = ETISALAT_DEFAULT_CONFIG;
  devices;
  constructor(
    private helperService: HelperService,
    private sharedService: SharedService,
    private modalCtrl: ModalController,
    public router: Router,
    private actRoute: ActivatedRoute
  ) {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.actRoute.data.subscribe(() => {
      this.updateHeader();
      this.devices = this.helperService.connectedDeviceModifier(this.sharedService.getApiResponseData()?.connectedDevices);
    });
    this.updatePageContent();
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.SERVICE_DETAILS',
    showBackBtn: true,
  };

  initialization() {
    if (!this.isPartialLoaded) {
      this.sharedService.setDefaultValues();
      //this.sharedService.setHeaderConfig('HEADER.SERVICE_DETAILS', false);
    }

    this.cardList = [
      {
        header: 'Landline status',
        subHeader: 'working',
        list: [],
      },
      {
        header: 'Value added services',
        subHeader: '7 subsribed',
        list: [
          {
            title: 'Clip',
            description: 'Working',
            title2: '',
            description2: '',
          },
          {
            title: 'Call forwarding',
            description: 'Active  & Enabled',
            title2: 'Call Forwarded to : *****1234',
            description2: 'Change',
            link: true,
          },
          {
            title: 'Call waiting',
            description: 'Issue fixed',
            title2: '',
            description2: '',
          },
          {
            title: 'CBB',
            description: 'Active  & Enabled',
            title2: '',
            description2: 'Reset pin',
            link: true,
          },
          {
            title: 'Name',
            description: 'Status',
            title2: '',
            description2: '',
          },
          {
            title: 'Name',
            description: 'Status',
            title2: '',
            description2: '',
          },
          {
            title: 'Name',
            description: 'Status',
            title2: '',
            description2: '',
          },
        ],
      },
    ];
    //#endregion Module 3
  }

  updateHeader() {
    if (!this.isPartialLoaded) {
      this.sharedService.setDefaultValues();
      this.sharedService.setHeaderConfig('MESSAGES.SERVICE_DETAILS', true);
    }
  }

  updatePageContent() {
    this.initialization();
  }

  button1Listener() {
    this.router.navigate(['/thanks']);
    // this.button1Click.emit();
  }

  button2Listener() {
    // this.button2Click.emit();
  }
}
