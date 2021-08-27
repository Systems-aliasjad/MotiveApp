import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-complaint',
  templateUrl: './book-complaint.component.html',
  styleUrls: ['./book-complaint.component.scss'],
})
export class BookComplaintComponent implements OnInit {
  public formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder, public router: Router) {
    this.formGroup = this.formBuilder.group({
      MobileNo: ['', Validators.required],
      AlternateContactNo: ['', Validators.required],
      Remarks: [''],
    });
  }

  ngOnInit() {}

  SubmitForm() {
    console.log(this.formGroup.value);
    this.router.navigate(['thanks']);
  }
}
