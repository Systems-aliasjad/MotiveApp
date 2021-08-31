import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { regExps, errorMessages } from '../../validators/validations';

@Component({
  selector: 'app-book-complaint',
  templateUrl: './book-complaint.component.html',
  styleUrls: ['./book-complaint.component.scss'],
})
export class BookComplaintComponent implements OnInit {
  public formGroup: FormGroup;
  error = errorMessages;

  constructor(private formBuilder: FormBuilder, public router: Router) {
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
    this.router.navigate(['thanks']);
  }
}
