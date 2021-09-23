import { Component, OnDestroy, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { regExps, errorMessages } from '../../../../shared/validators/validations';
import { SharedService } from '../../../../shared/shared.service';
import { Subscription } from 'rxjs';
import { eyeHide, eyeShow } from 'src/app/shared/constants/constants';
@Component({
  selector: 'app-change-call-forward',
  templateUrl: './change-call-forward.component.html',
  styleUrls: ['./change-call-forward.component.scss'],
})
export class ChangeCallForwardComponent implements OnInit {
  public formGroup: FormGroup;
  error = errorMessages;
  termsCheck: boolean = false;
  subscription: Subscription;
  codeType;
  rules = ['rule 1', 'rule 2', 'rule 3'];

  passwordShowIcon: string = eyeShow;
  passwordHideIcon: string = eyeHide;

  hideShowPassword(Type: any) {
    Type.type = Type.type === 'password' ? 'text' : 'password';
  }

  constructor(private formBuilder: FormBuilder, public router: Router, private sharedService: SharedService, private activatedRoute: ActivatedRoute) {
    this.codeType = this.router.url;
    this.subscription = this.activatedRoute.data.subscribe((data) => {
      this.codeType = data.id;
      this.initialization();
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
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

  initialization() {
    this.sharedService.setDefaultValues();
    this.sharedService.setHeaderConfig('HEADER.CALL_FORWARD', true);
  }

  SubmitForm() {
    console.log(this.formGroup.valid);
    this.router.navigate(['/issues/phone/call-forward-message']);
  }
}
