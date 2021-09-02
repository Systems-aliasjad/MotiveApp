import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerJourneyConstants } from '../shared/constants/CustomerJourneyConstants';
import { IButton } from '../shared/constants/types';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-issue-builder',
  templateUrl: './issue-builder.component.html',
  styleUrls: ['./issue-builder.component.scss'],
})
export class IssueBuilderComponent implements OnInit {
  codeType;
  buttonsConfig: IButton[] = [];

  routeLinkHelper(arr) {
    return arr.map((obj) => {
      return {
        ...obj,
        clickListener: () => {
          this.router.navigate([obj.linkTo]);
        },
      };
    });
  }
  constructor(private sharedService: SharedService, private activatedRoute: ActivatedRoute, public router: Router) {
    this.sharedService.setHeaderConfig('LANDING_PAGE.INTERNET_ISSUES_TITLE', false);
    this.activatedRoute.data.subscribe((data) => {
      this.codeType = data.id;
    });
  }

  ngOnInit() {
    //Router Reboot Required
    if (this.codeType === 1) {
      this.buttonsConfig = this.routeLinkHelper(CustomerJourneyConstants.routerRebootRequiredButtons);
    }
  }
}
