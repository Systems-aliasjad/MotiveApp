import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SharedService } from '../../shared.service';
import { CustomerJourneyConstants } from '../../constants/CustomerJourneyConstants';
import { IButton } from '../../constants/types';

@Component({
  selector: 'app-browser-stepper',
  templateUrl: './browser-stepper.component.html',
  styleUrls: ['./browser-stepper.component.css'],
})
export class BrowserStepperComponent implements OnInit {
  selectedLang: string = 'en';
  step: number = 1;
  headerString: string = '';
  isBookComp: boolean = true;
  isContTroubleShoot: boolean = false;
  buttonConfig: IButton[] = [];

  constructor(private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.selectedLang = this.sharedService.getDefaultLanguage();
    this.activatedRoute.queryParams.subscribe((params) => {
      this.step = params['step'] || 1;
      this.initialization();
    });
  }

  ngOnInit(): void {}

  initialization() {
    this.headerString = 'Step ' + this.step + '/3';
    this.sharedService.setHeaderConfig(this.headerString, true);
    if (this.step < 3) {
      this.buttonConfig = CustomerJourneyConstants.browserStapperCase1Buttons;
      this.buttonConfig.forEach((elem) => {
        if (elem.title === 'BUTTONS.ISSUE_FIXED') {
          elem.linkTo = '/troubleshoot-complete';
        }
      });
      this.sharedService.setButtonConfig(this.routeLinkHelper(this.buttonConfig));
    } else {
      this.buttonConfig = CustomerJourneyConstants.browserStapperCase2Buttons;
      this.buttonConfig.forEach((elem) => {
        if (elem.title === 'BUTTONS.ISSUE_FIXED') {
          elem.linkTo = '/troubleshoot-complete';
        }
      });
      this.sharedService.setButtonConfig(this.routeLinkHelper(this.buttonConfig));
    }
  }

  routeLinkHelper(arr) {
    return arr.map((obj) => {
      return {
        ...obj,
        clickListener: () => {
          if (this.step < 3 && obj.linkTo === '/browser-stapper') {
            this.step = +this.step + 1;
            this.router.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: { step: this.step },
              queryParamsHandling: 'merge',
            });
          } else {
            this.router.navigate([obj.linkTo]);
          }
        },
      };
    });
  }
}
