import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPageHeader } from '../../constants/types';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header-multi-line',
  templateUrl: './header-multi-line.component.html',
  styleUrls: ['./header-multi-line.component.scss'],
})
export class HeaderMultiLineComponent implements OnInit {
  @Input()
  headerConfig: IPageHeader;

  constructor(public router: Router, private location: Location) {}
  ngOnDestroy(): void {}
  ngOnInit() {}

  back(): void {
    this.location.back();
  }
}
