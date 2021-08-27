import { Component, Input, OnInit } from '@angular/core';
import { IPageHeader } from '../../constants/types';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-page-top',
  templateUrl: './page-top.component.html',
  styleUrls: ['./page-top.component.scss'],
})
export class PageTopComponent implements OnInit {
  headerConfig: IPageHeader;

  constructor(private sharedService: SharedService) {
    this.sharedService.getHeaderConfig().subscribe((config) => {
      this.headerConfig = config;
    });
  }

  ngOnInit(): void {}
}
