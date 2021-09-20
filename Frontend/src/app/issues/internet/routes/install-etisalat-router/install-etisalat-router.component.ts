import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { InstallEtisalatRouterDialogComponent } from 'src/app/shared/dialogs/install-etisalat-router-dialog/install-etisalat-router-dialog.component';
import { SharedService } from 'src/app/shared/shared.service';
import { errorMessages, regExps } from 'src/app/shared/validators/validations';

@Component({
  selector: 'app-install-etisalat-router',
  templateUrl: './install-etisalat-router.component.html',
  styleUrls: ['./install-etisalat-router.component.scss'],
})
export class InstallEtisalatRouterComponent implements OnInit {
  public formGroup: FormGroup;
  error = errorMessages;
  codeType;
  modal;
  buttonText;
  subscription: Subscription;
  brandList;
  modelList;
  arrayList;
  modelHeader;
  constructor(
    private modalCtrl: ModalController,
    private activatedRoute: ActivatedRoute,
    private sharedService: SharedService,
    private formBuilder: FormBuilder,
    public router: Router,
    private location: Location
  ) {
    this.codeType = this.router.url;
    this.subscription = this.activatedRoute.data.subscribe((data) => {
      this.initialization();
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {}

  createForm() {
    this.formGroup = this.formBuilder.group({
      Brand: [''],
      Model: [''],
      MobileNo: ['', [Validators.required, Validators.pattern(regExps.phoneNumber)]],
    });
  }

  initialization() {
    this.sharedService.setDefaultValues();

    this.brandList = [
      { text: 'Brand 1', value: '1' },
      { text: 'Brand 2', value: '2' },
      { text: 'Brand 3', value: '3' },
      { text: 'Brand 4', value: '4' },
      { text: 'Brand 5', value: '5' },
    ];
    this.modelList = [
      { text: 'Model 1', value: '1' },
      { text: 'Model 2', value: '2' },
      { text: 'Model 3', value: '3' },
      { text: 'Model 4', value: '4' },
      { text: 'Model 5', value: '5' },
      { text: 'Model 6', value: '6' },
    ];

    this.createForm();
  }

  async openInstallEtisalatRouterDialog(value) {
    if (value == 1) {
      this.arrayList = this.brandList;
      this.modelHeader = 'HEADER.SELECT_BRAND';
    } else {
      this.modelHeader = 'HEADER.SELECT_MODEL';
      this.arrayList = this.modelList;
    }

    //Now open dialog
    this.modal = await this.modalCtrl.create({
      component: InstallEtisalatRouterDialogComponent,
      componentProps: {
        arrayList: this.arrayList,
        modelHeader: this.modelHeader,
      },
    });
    return await this.modal.present();
  }

  get f() {
    return this.formGroup.controls;
  }

  SubmitForm() {
    console.log(this.formGroup.value);
    // this.router.navigate(['package-upgrade-request-successfully']);
  }

  onBackClick() {
    this.location.back();
  }
}
