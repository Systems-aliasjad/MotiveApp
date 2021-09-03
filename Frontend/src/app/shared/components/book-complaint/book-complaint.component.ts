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
    //
    else if (this.codeType === ERoutingIds.bookComplaint) {
      this.buttonText = 'BUTTONS.BOOK_A_COMPLAINT';
      this.sharedService.setHeaderConfig('HEADER.BOOK_COMPLAINT', false);
    }
  }

  get f() {
    return this.formGroup.controls;
  }

  SubmitForm() {
    console.log(this.formGroup.value);
    //TODO: update Checks
    if (this.codeType == 2) this.router.navigate(['package-upgrade-request-successfully']);
    else this.router.navigate(['appoinment-successfully']);
  }
}
