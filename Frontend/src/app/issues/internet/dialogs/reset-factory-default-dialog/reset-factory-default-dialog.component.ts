import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-reset-factory-default-dialog',
  templateUrl: './reset-factory-default-dialog.component.html',
  styleUrls: ['./reset-factory-default-dialog.component.scss'],
})
export class ResetFactoryDefaultDialog implements OnInit {
  terms: boolean = false;
  constructor(private modalCtrl: ModalController, private router: Router, private sharedService: SharedService) {}

  CloseModal() {
    this.dismiss();
    this.router.navigate(['/issues/internet/reset-wifi-password']);
  }

  ngOnInit() {
    this.sharedService.getTermsConditions().subscribe((term) => {
      this.terms = term;
    });
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
