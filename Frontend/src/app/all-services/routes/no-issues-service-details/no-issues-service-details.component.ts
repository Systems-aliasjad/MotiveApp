import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { regExps, errorMessages } from '../../../shared/validators/validations';
import { SharedService } from '../../../shared/shared.service';
import { ConfirmedValidator, eyeHide, eyeShow } from '../../../shared/constants/constants';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { IPageHeader } from 'src/app/shared/constants/types';
@Component({
  selector: 'app-no-issues-service-details',
  templateUrl: './no-issues-service-details.component.html',
  styleUrls: ['./no-issues-service-details.component.scss'],
})
export class NoIssuesServiceDetailsComponent implements OnInit {
  public segment: string = '1';
  public routerSettingsForm: FormGroup;
  error = errorMessages;
  termsCheck: boolean = false;
  modal: any;
  subscription: Subscription;
  passwordShowIcon: string = eyeShow;
  passwordHideIcon: string = eyeHide;
  hideShowPassword(Type: any) {
    Type.type = Type.type === 'password' ? 'text' : 'password';
  }

  constructor(private dc: ChangeDetectorRef, public router: Router, private sharedService: SharedService, private actRoute: ActivatedRoute) {
    this.subscription = actRoute.params.subscribe((val) => {
      this.initialization();
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {}

  initialization() {
    //  this.sharedService.setDefaultValues();
    //this.sharedService.setHeaderConfig('HEADER.SERVICE_DETAILS', true);
  }

  get f() {
    return this.routerSettingsForm.controls;
  }

  SubmitForm() {
    //console.log(this.routerSettingsForm.valid);
    this.router.navigate(['reset-wifi-password-form_successfully']);
  }

  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.SERVICE_DETAILS',
    showBackBtn: true,
  };
}
