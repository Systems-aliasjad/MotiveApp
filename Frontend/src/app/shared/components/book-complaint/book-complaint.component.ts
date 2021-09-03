import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private activatedRoute: ActivatedRoute, private sharedService: SharedService, private formBuilder: FormBuilder, public router: Router) {
    this.codeType = this.router.url;

    ///IF IS FOR PACKAGE UPGRADE RECOMMENDED
    if (this.router.url.indexOf('package-upgrade-recommended-form') !== -1) {
      this.codeType = 2;
      this.sharedService.setHeaderConfig('HEADER.PACKAGE_UPGRADE', false);
    } else {
      this.sharedService.setHeaderConfig('HEADER.BOOK_COMPLAINT', false);
    }

    this.formGroup = this.formBuilder.group({
      MobileNo: ['', [Validators.required, Validators.pattern(regExps.phoneNumber)]],
      AlternateContactNo: ['', [Validators.required, Validators.pattern(regExps.phoneNumber)]],
      Remarks: [''],
    });
  }

  ngOnInit() {}

  get f() {
    return this.formGroup.controls;
  }

  SubmitForm() {
    console.log(this.formGroup.value);
    this.router.navigate(['appoinment-successfully']);
  }

  SubmitFormPackageUpgrade() {
    console.log(this.formGroup.value);
    this.router.navigate(['package-upgrade-request-successfully']);
  }
}
