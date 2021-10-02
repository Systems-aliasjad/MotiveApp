import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IPageHeader } from '../../constants/types';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-page-top',
  templateUrl: './page-top.component.html',
  styleUrls: ['./page-top.component.scss'],
})
export class PageTopComponent implements OnInit, OnDestroy {
  @Input()
  headerTitle: string = '';

  constructor(private sharedService: SharedService) {}
  ngOnDestroy(): void {}

  ngOnInit(): void {}
}
