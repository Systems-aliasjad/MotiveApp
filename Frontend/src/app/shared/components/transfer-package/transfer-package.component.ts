import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ERoutingIds } from '../../constants/constants';
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
  codeType;

  cardList: any;
  constructor(private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe((data) => {
      this.codeType = data.id;
      this.initialization();
    });
  }

  ngOnInit() {}

  initialization() {
    this.sharedService.setDefaultValues();

    if (this.codeType === ERoutingIds.packagetransfer) {
      this.PageTitle = 'HEADER.TRANSFER_PACKAGE';
      this.PageContent = 'TRANSFER_PACKAGE.DESCRIPTION';
      this.sharedService.setHeaderConfig(this.PageTitle, false, true);
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.transferPackageButtons));
      this.cardList = [
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
    } else if (this.codeType === ERoutingIds.enableWatchSpecificChannelpackageTransfer) {
      this.PageTitle = 'HEADER.UNABLE_TO_WATCH_SPECIFIC_CHANNEL_TRANSFER_PACKAGE';
      this.PageContent = 'TRANSFER_PACKAGE.DESCRIPTION_UNABLE_WATCH_SPECIFIC_CHANNEL';
      this.sharedService.setHeaderConfig(this.PageTitle, false, true);
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.unableWatchSpecificTransferPackageButtons));
      this.cardList = [
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
    }

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
