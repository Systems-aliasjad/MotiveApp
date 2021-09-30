import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { ERoutingIds } from 'src/app/shared/constants/constants';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-transfer-package',
  templateUrl: './transfer-package.component.html',
  styleUrls: ['./transfer-package.component.scss'],
})
export class TransferPackageComponent implements OnInit, OnDestroy {
  @Input()
  button1: IMotiveButton;
  @Output()
  button1Click = new EventEmitter<any>();

  @Input()
  button2: IMotiveButton;
  @Output()
  button2Click = new EventEmitter();

  @Input()
  button3: IMotiveButton;
  @Output()
  button3Click = new EventEmitter();

  @Input()
  pageContent: string;
  @Input()
  cardList: any;

  formGroup: FormGroup;
  subscription: Subscription;
  constructor(private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.subscription = this.activatedRoute.data.subscribe((data) => {
      this.initialization();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {}

  initialization() {
    this.formGroup = new FormGroup({
      radioButton: new FormControl(),
    });
  }

  button1Listener() {
    this.button1Click.emit(this.formGroup);
  }

  button2Listener() {
    this.button2Click.emit();
  }

  button3Listener() {
    this.button3Click.emit();
  }
}
