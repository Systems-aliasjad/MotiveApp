import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerJourneyConstants } from '../../constants/CustomerJourneyConstants';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-transfer-package',
  templateUrl: './transfer-package.component.html',
  styleUrls: ['./transfer-package.component.css'],
})
export class TransferPackageComponent implements OnInit {
  PageTitle: string = 'HEADER.TRANSFER_PACKAGE';
  PageContent: string = 'TRANSFER_PACKAGE.DESCRIPTION';
  formGroup: FormGroup;

  cardList: any[] = [
    {
      title: 'STB SR#039838920',
      description: 'MAC abcd@1234',
      checked: true,
    },
    {
      title: 'STB SR#039838931',
      description: 'MAC abcd@567',
      checked: false,
    },
    {
      title: 'STB SR#039838920',
      description: 'MAC abcd@789',
      checked: false,
    },
  ];
  constructor(private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((parms) => {
      this.initialization();
    });
  }

  ngOnInit() {}

  initialization() {
    this.sharedService.setDefaultValues();
    this.sharedService.setHeaderConfig(this.PageTitle, false, true);
    this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.transferPackageButtons));
    this.formGroup = new FormGroup({
      radioButton: new FormControl(),
    });
  }

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
}
