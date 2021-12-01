import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BackendService } from 'src/app/services/backend.service';
import { IPageHeader } from 'src/app/shared/constants/types';
// import * as CryptoJS from 'crypto-js';
import { SharedService } from 'src/app/shared/shared.service';
@Component({
  selector: 'app-account-id',
  templateUrl: './account-id.component.html',
  styleUrls: ['./account-id.component.scss'],
})
export class AccountIdComponent implements OnInit {
  conversionEncryptOutput;
  plainText: string = 'hello motive users 789 24875';
  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.ACCOUNT_DETAILS',
    showBackBtn: true,
  };
  formGroup: FormGroup;

  constructor(
    private authService: AuthService,
    private backendService: BackendService,
    private router: Router,
    private formBuilder: FormBuilder,
    private actRoute: ActivatedRoute,
    private sharedService: SharedService
  ) {
    this.initialization();
  }

  ngOnInit() {}
  ngOnDestroy() {}

  initialization() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      AccountID: ['', [Validators.required]],
    });
  }

  get f() {
    return this.formGroup.controls;
  }

  onBackClick() {}

  SubmitForm() {
    //https://morioh.com/p/bbe2434acaa9
    // this.conversionEncryptOutput = CryptoJS.AES.encrypt(this.formGroup.controls['AccountID'].value, this.plainText);
    // this.sharedService.setEncryptedID(this.conversionEncryptOutput);
    // this.sharedService.setLoader(true);
    // this.backendService.getUserDetailFromAccountId(this.formGroup.controls['AccountID'].value).subscribe((data: any) => {
    //   this.authService.setAuthorizationToken(data?.result?.token);
    //   this.sharedService.setLoader(false);
    //   this.sharedService.setLocalStorage('CUS_MOBILE_NO', data?.result?.accountId);
    //   this.router.navigate(['landing'], { state: { user: data?.result } });
    // });
  }
}
