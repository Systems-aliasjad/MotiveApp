import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
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

  @Input()
  headerConfig: IPageHeader;

  formGroup: FormGroup;
  subscription: Subscription;
  constructor(private formBuilder: FormBuilder, private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.subscription = this.activatedRoute.data.subscribe((data) => {
      this.initialization();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    console.log('init', this.cardList);
  }

  initialization() {
    this.formGroup = this.formBuilder.group({
      radioButton: [''],
    });
  }

  button1Listener() {
    console.log('form group', this.formGroup);
    this.button1Click.emit(this.formGroup);
  }

  button2Listener() {
    this.button2Click.emit();
  }

  button3Listener() {
    this.button3Click.emit();
  }
}
