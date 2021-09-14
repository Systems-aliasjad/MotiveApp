import { Component, OnDestroy, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ERoutingIds } from '../../constants/constants';
import { PhoneIssueListDialogComponent } from '../../dialogs/phone-issue-list-dialog/phone-issue-list-dialog.component';
import { SharedService } from '../../shared.service';
import { regExps, errorMessages } from '../../validators/validations';

@Component({
  selector: 'app-dummy-del',
  templateUrl: './dummy-del.component.html',
  styleUrls: ['./dummy-del.component.scss'],
})
export class DummyDelComponent implements OnInit {
  codeType;
  buttonText;
  subscription: Subscription;
  constructor(
    private modalCtrl: ModalController,
    private activatedRoute: ActivatedRoute,
    private sharedService: SharedService,
    private formBuilder: FormBuilder,
    public router: Router
  ) {
    this.codeType = this.router.url;
    this.subscription = this.activatedRoute.data.subscribe((data) => {
      this.codeType = data.id;
      this.initialization();
    });
  }
  modal: any;
  ngOnInit() {}
  async SubmitForm() {
    this.modal = await this.modalCtrl.create({
      component: PhoneIssueListDialogComponent,
    });
    return await this.modal.present();
  }

  initialization() {
    this.sharedService.setDefaultValues();
  }
}
