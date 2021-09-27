import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
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

  constructor(private sharedService: SharedService, private modalCtrl: ModalController, public router: Router, private actRoute: ActivatedRoute) {
    this.subscription = this.actRoute.data.subscribe((data) => {
      this.codeType = data.id;
      this.initialization();
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {}

  initialization() {
    if (!this.isPartialLoaded) {
      this.sharedService.setDefaultValues();
      this.sharedService.setHeaderConfig('MESSAGES.SERVICE_DETAILS', true);
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

  button1Listener() {
    this.router.navigate(['/thanks']);
    // this.button1Click.emit();
  }

  button2Listener() {
    // this.button2Click.emit();
  }
}
