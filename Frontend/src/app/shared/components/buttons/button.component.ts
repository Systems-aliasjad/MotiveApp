import { Component, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EventEmitter } from '@angular/core';
import { TermsConditionsComponent } from '../terms-conditions/terms-conditions.component';
import { SharedService } from '../../shared.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'motive-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {
  @Input()
  type: 'primary' | 'secondary' | 'link' | 'terms';
  @Input()
  title: string;
  @Input()
  disable: boolean;
  /** @deprecated - Please use parent component for this message. */
  @Input()
  explanatoryNote: string;
  @Input()
  SM: string = '12'; //size
  @Input()
  MD: string = '12'; //size Medium
  @Input()
  LG: string = '12'; //size Large
  @Output()
  clickHandler = new EventEmitter();

  terms: boolean = false;
  modal: any;
  constructor(private backendService: BackendService, private modalCtrl: ModalController, private sharedService: SharedService) {}

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

  handleClick() {
    this.clickHandler.emit();
  }

  termsChange() {
    this.sharedService.setTermsConditions(this.terms);
  }

  async PopupTermsConditions() {
    this.modal = await this.modalCtrl.create({
      component: TermsConditionsComponent,
      cssClass: 't-c-modal',
    });
    this.modal.onDidDismiss().then((d) => {
      this.sharedService.getTermsConditions().subscribe((_terms) => {
        this.terms = _terms;
      });
    });
    return await this.modal.present();
  }
}
