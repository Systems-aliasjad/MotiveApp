import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BackendService } from 'src/app/services/backend.service';
import { flowCodes } from 'src/app/shared/constants/constants';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-reset-wifi-dialog',
  templateUrl: './reset-wifi-dialog.component.html',
  styleUrls: ['./reset-wifi-dialog.component.scss'],
})
export class ResetWifiDialogComponent implements OnInit {
  terms: boolean = false;

  constructor(private modalCtrl: ModalController, private router: Router, private sharedService: SharedService, private backendService: BackendService) {}

  CloseModal() {
    this.dismiss();
    this.router.navigate(['issues/internet/reset-wifi-password']);
  }

  ngOnInit() {
    this.sharedService.getTermsConditions().subscribe((term) => {
      this.terms = term;
    });
  }

  dismiss() {
    this.modalCtrl.dismiss();
    this.sharedService.TicketCloseAPICallWithURL('thanks');
  }
}
