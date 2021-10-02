import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { regExps, errorMessages } from '../../validators/validations';
import { IMotiveButton, IPageHeader, IResetPinContent } from '../../constants/types';

@Component({
  selector: 'app-reset-pin',
  templateUrl: './reset-pin.component.html',
  styleUrls: ['./reset-pin.component.scss'],
})
export class ResetPinComponent implements OnInit {
  @Input()
  resetPinContent: IResetPinContent;
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

  formGroup: FormGroup;
  error = errorMessages;
  subscription: Subscription;

  constructor(private formBuilder: FormBuilder, public router: Router, private actRoute: ActivatedRoute) {
    this.subscription = this.actRoute.data.subscribe((data) => {
      this.initialization();
    });
  }

  @Input()
  headerConfig: IPageHeader;

  ngOnInit() {}

  initialization() {
    this.formGroup = this.formBuilder.group({
      MobileNo: ['', [Validators.required, Validators.pattern(regExps.phoneNumber)]],
    });
  }

  get f() {
    return this.formGroup.controls;
  }

  button1Listener() {
    this.button1Click.emit(this.formGroup.controls['MobileNo'].value);
  }

  button2Listener() {
    this.button2Click.emit();
  }

  button3Listener() {
    this.button3Click.emit();
  }
}
