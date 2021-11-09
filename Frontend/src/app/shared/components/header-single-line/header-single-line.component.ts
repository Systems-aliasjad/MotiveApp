import { Component, Input, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { IPageHeader } from '../../constants/types';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-header-single-line',
  templateUrl: './header-single-line.component.html',
  styleUrls: ['./header-single-line.component.scss'],
})
export class HeaderSingleLineComponent implements OnInit {
  @Input()
  headerConfig: IPageHeader;
  @Output()
  dismiss = new EventEmitter<any>();

  constructor(private sharedService: SharedService, public router: Router, private location: Location) {}
  ngOnDestroy(): void {}
  ngOnInit() {}

  back(): void {
    this.location.back();
    this.dismissDialog();
  }

  dismissDialog(): void{
    this.dismiss.emit();
  }
}
