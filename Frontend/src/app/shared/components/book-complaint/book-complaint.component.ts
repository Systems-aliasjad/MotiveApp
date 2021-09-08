import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ERoutingIds } from '../../constants/constants';
import { SharedService } from '../../shared.service';
import { regExps, errorMessages } from '../../validators/validations';

@Component({
  selector: 'app-book-complaint',
  templateUrl: './book-complaint.component.html',
  styleUrls: ['./book-complaint.component.scss'],
})
export class BookComplaintComponent implements OnInit {
  public formGroup: FormGroup;
  error = errorMessages;
  codeType;
  buttonText;
  constructor(private activatedRoute: ActivatedRoute, private sharedService: SharedService, private formBuilder: FormBuilder, public router: Router) {
    this.codeType = this.router.url;
    this.activatedRoute.data.subscribe((data) => {
      this.codeType = data.id;
    });

    this.formGroup = this.formBuilder.group({
      MobileNo: ['', [Validators.required, Validators.pattern(regExps.phoneNumber)]],
      AlternateContactNo: ['', [Validators.required, Validators.pattern(regExps.phoneNumber)]],
      Remarks: [''],
    });
  }

  ngOnInit() {
    //IF IS FOR PACKAGE UPGRADE RECOMMENDED
    if (this.codeType === ERoutingIds.packageUpgradeRecommendedForm) {
      this.buttonText = 'BUTTONS.CONTINUE';
      this.sharedService.setHeaderConfig('HEADER.PACKAGE_UPGRADE', false);
    }
    //book complain
    else if (this.codeType === ERoutingIds.bookComplaint) {
      this.buttonText = 'BUTTONS.BOOK_A_COMPLAINT';
      this.sharedService.setHeaderConfig('HEADER.BOOK_COMPLAINT', false);
    }

    //Router Upgrade
    else if (this.codeType === ERoutingIds.routerUpgradeRecommendedForm) {
      this.buttonText = 'BUTTONS.CONTINUE';
      this.sharedService.setHeaderConfig('HEADER.ROUTER_UPGRADE', false);
    }

    //Router Package Upgrade
    else if (this.codeType === ERoutingIds.routerPackageUpgradeRecommendedForm) {
      this.buttonText = 'BUTTONS.CONTINUE';
      this.sharedService.setHeaderConfig('HEADER.ROUTER_PACKAGE_UPGRADE', false);
    }

    //third party router
    else if (this.codeType === ERoutingIds.thirdPartyRouterForm) {
      this.buttonText = 'BUTTONS.CONTINUE';
      this.sharedService.setHeaderConfig('HEADER.THIRD_PARTY_ROUTER', false);
    }

    //#region  Module 2
    //Tv box not reachable
    else if (this.codeType === ERoutingIds.tvBoxNotReachableForm) {
      this.buttonText = 'BUTTONS.BOOK_AN_APPOINTMENT';
      this.sharedService.setHeaderConfig('HEADER.BOOK_COMPLAINT', false);
    }
    //#endregion Module 2
  }

  get f() {
    return this.formGroup.controls;
  }

  SubmitForm() {
    console.log(this.formGroup.value);
    //TODO: update Checks
    if (this.codeType === ERoutingIds.packageUpgradeRecommendedForm) {
      this.router.navigate(['package-upgrade-request-successfully']);
    } else if (this.codeType === ERoutingIds.bookComplaint) {
      this.router.navigate(['appoinment-successfully']);
    } else if (this.codeType === ERoutingIds.routerUpgradeRecommendedForm) {
      this.router.navigate(['router-upgrade-request-successfully']);
    } else if (this.codeType === ERoutingIds.routerPackageUpgradeRecommendedForm) {
      this.router.navigate(['router-package-upgrade-request-successfully']);
    } else if (this.codeType === ERoutingIds.thirdPartyRouterForm) {
      this.router.navigate(['third-party-router-successfully']);
    }

    //#region  Module 2
    else if (this.codeType === ERoutingIds.tvBoxNotReachableForm) {
      this.router.navigate(['tvBox-not-reachable-form_successfully']);
    }
    //#endregion Module 2
  }
}
