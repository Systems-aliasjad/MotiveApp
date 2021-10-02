import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { regExps, errorMessages } from '../../validators/validations';
import { SharedService } from '../../shared.service';
import { ConfirmedValidator, eyeHide, eyeShow } from '../../constants/constants';
import { Subscription } from 'rxjs';
import { IMotiveButton, IPageHeader } from '../../constants/types';

@Component({
  selector: 'app-reset-router-password',
  templateUrl: './reset-router-password.component.html',
  styleUrls: ['./reset-router-password.component.scss'],
})
export class ResetRouterPasswordComponent implements OnInit, OnDestroy {
  //
  @Input()
  button1: IMotiveButton;
  @Output()
  button1Click = new EventEmitter();

  @Input()
  button2: IMotiveButton;
  @Output()
  button2Click = new EventEmitter<any>();

  @Input()
  button3: IMotiveButton;
  @Output()
  button3Click = new EventEmitter();

  @Input()
  headerConfig: IPageHeader;
  //
  public segment: string = '1';
  public routerSettingsForm: FormGroup;
  passwordShowIcon: string = eyeShow;
  passwordHideIcon: string = eyeHide;
  error = errorMessages;
  @ViewChild('staticTabs', { static: false }) staticTabs: ResetRouterPasswordComponent;
  subscription: Subscription;

  constructor(private fb: FormBuilder, public router: Router, private sharedService: SharedService, private actRoute: ActivatedRoute) {
    this.subscription = actRoute.data.subscribe((data) => {
      this.initialization();
    });
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  initialization() {
    this.createForm();
  }

  createForm() {
    this.routerSettingsForm = this.fb.group({
      terms: [true, Validators.required],
      tab1: this.fb.group(
        {
          MobileNo: ['', [Validators.required, Validators.pattern(regExps.phoneNumber)]],
          NewPassword: ['', Validators.required],
          ConfirmPassword: ['', Validators.required],
        },
        {
          validator: ConfirmedValidator('NewPassword', 'ConfirmPassword'),
        }
      ),
      tab2: this.fb.group(
        {
          MobileNo: ['', [Validators.required, Validators.pattern(regExps.phoneNumber)]],
          NewPassword: ['', Validators.required],
          ConfirmPassword: ['', Validators.required],
        },
        {
          validator: ConfirmedValidator('NewPassword', 'ConfirmPassword'),
        }
      ),
    });
  }

  get f() {
    return this.routerSettingsForm.controls;
  }

  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }

  hideShowPassword(Type: any) {
    Type.type = Type.type === 'password' ? 'text' : 'password';
  }

  //
  button1Listener() {
    this.button1Click.emit();
  }

  button2Listener() {
    this.button2Click.emit(this.routerSettingsForm);
  }

  button3Listener() {
    this.button3Click.emit();
  }
  //
}
