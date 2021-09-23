import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { errorMessages } from '../../validators/validations';
import { SharedService } from '../../shared.service';
import { Subscription } from 'rxjs';
import { IMotiveButton } from '../diagnose-issue/diagnose-issue.component';
import { eyeHide, eyeShow } from '../../constants/constants';

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

  passwordShowIcon: string = eyeShow;
  passwordHideIcon: string = eyeHide;

  hideShowPassword(Type: any) {
    Type.type = Type.type === 'password' ? 'text' : 'password';
  }

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

  ngOnInit() {}

  createForm() {
    this.formGroup = this.formBuilder.group(
      {
        NewPassword: ['', [Validators.required]],
        ConfirmPassword: ['', [Validators.required]],
      },
      {
        //validator: ConfirmedValidator('NewPassword', 'ConfirmPassword'),
      }
    );
  }

  get f() {
    return this.formGroup.controls;
  }

  button1Listener() {
    this.button1Click.emit();
  }

  button2Listener() {
    this.button2Click.emit();
  }
}
