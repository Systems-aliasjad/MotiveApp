import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { IPageHeader } from '../../constants/types';
import { SharedService } from '../../shared.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-header-single-line',
  templateUrl: './header-single-line.component.html',
  styleUrls: ['./header-single-line.component.scss'],
})
export class HeaderSingleLineComponent implements OnInit {
  @Input()
  headerConfig: IPageHeader;

  @Input()
  termsAndCondition: boolean = false;

  constructor(private sharedService: SharedService, public router: Router, private location: Location , private modalctr: ModalController) {}
  ngOnDestroy(): void {}
  ngOnInit() {}

  back(): void {
    this.location.back();
  }

  close(): void {
    this.modalctr.dismiss();
  }
}
