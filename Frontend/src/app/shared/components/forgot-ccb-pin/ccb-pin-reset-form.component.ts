import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { errorMessages, regExps } from '../../validators/validations';
import { SharedService } from '../../shared.service';
import { Subscription } from 'rxjs';
import { ConfirmedValidator, eyeHide, eyeShow } from '../../constants/constants';
import { IMotiveButton, IPageHeader } from '../../constants/types';

@Component({
  selector: 'app-ccb-pin-reset-form',
  templateUrl: './ccb-pin-reset-form.component.html',
  styleUrls: ['./ccb-pin-reset-form.component.scss'],
})
export class CcbPinResetFormComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  error = errorMessages;
  termsCheck: boolean = false;
  public formGroup: FormGroup;
  @Input()
  button1: IMotiveButton;
  @Output()
  button1Click = new EventEmitter();

  @Input()
  button2: IMotiveButton;
  @Output()
  button2Click = new EventEmitter();

  @Input()
  rules: string[];

  passwordShowIcon: string = eyeShow;
  passwordHideIcon: string = eyeHide;

  @Input()
  headerConfig: IPageHeader;

  rulesList: string[] = [];
  constructor(private formBuilder: FormBuilder, public router: Router, private sharedService: SharedService, private activatedRoute: ActivatedRoute) {
    this.subscription.add(
      this.sharedService.getTermsConditions().subscribe((config) => {
        this.termsCheck = config;
      })
    );
    this.subscription.add(
      this.activatedRoute.data.subscribe(() => {
        this.createForm();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.rulesList = this.rules;
  }

  createForm() {
    console.log(this.rules);
    this.rulesList = this.rules;
    this.formGroup = this.formBuilder.group(
      {
        NewPassword: ['', [Validators.required, Validators.pattern(regExps.ccbPin)]],
        ConfirmPassword: ['', [Validators.required, Validators.pattern(regExps.ccbPin)]],
      },
      {
        validator: ConfirmedValidator('NewPassword', 'ConfirmPassword'),
      }
    );
  }

  get f() {
    return this.formGroup.controls;
  }

  hideShowPassword(Type: any) {
    Type.type = Type.type === 'password' ? 'text' : 'password';
  }

  button1Listener() {
    this.button1Click.emit(this.formGroup);
  }

  button2Listener() {
    this.button2Click.emit();
  }
}
