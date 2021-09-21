import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-install-etisalat-router-dialog',
  templateUrl: './install-etisalat-router-dialog.component.html',
  styleUrls: ['./install-etisalat-router-dialog.component.scss'],
})
export class InstallEtisalatRouterDialogComponent implements OnInit {
  @Input()
  arrayList: any;
  @Input()
  modelHeader: string = '';
  public formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder, private modalCtrl: ModalController, private router: Router) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.formGroup = this.formBuilder.group({
      radioList: [''],
    });
  }

  dismiss() {
    this.modalCtrl.dismiss(this.formGroup.controls['radioList'].value);
  }
}
