import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IMotiveButton } from '../../constants/types';
import { regExps, errorMessages } from '../../validators/validations';

@Component({
  selector: 'app-book-complaint',
  templateUrl: './book-complaint.component.html',
  styleUrls: ['./book-complaint.component.scss'],
})
export class BookComplaintComponent implements OnInit, OnDestroy {
  @Input()
  button1: IMotiveButton;
  @Output()
  button1Click = new EventEmitter<any>();

  @Input()
  button2: IMotiveButton;
  @Output()
  button2Click = new EventEmitter();

  @Input()
  button3: IMotiveButton;
  @Output()
  button3Click = new EventEmitter();

  myBtnSize;
  formGroup: FormGroup;
  error = errorMessages;
  subscription: Subscription;
  constructor(private formBuilder: FormBuilder, private actRoute: ActivatedRoute) {
    this.subscription = this.actRoute.data.subscribe((data) => {
      this.initialization();
    });
  }

  ngOnInit() {
    this.myBtnSize = this.button3 ? '6' : '12';
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  initialization() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      MobileNo: ['', [Validators.required, Validators.pattern(regExps.phoneNumber)]],
      AlternateContactNo: ['', [Validators.required, Validators.pattern(regExps.phoneNumber)]],
      Remarks: [''],
    });
  }

  get f() {
    return this.formGroup.controls;
  }

  onBackClick() {}

  button1Listener() {
    this.button1Click.emit(this.formGroup);
  }

  button2Listener() {
    this.button2Click.emit();
  }

  button3Listener() {
    this.button3Click.emit();
  }
}
