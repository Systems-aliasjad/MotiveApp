import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-top',
  templateUrl: './page-top.component.html',
  styleUrls: ['./page-top.component.scss'],
})
export class PageTopComponent implements OnInit {
  @Input()
  pageTitle: any;
  constructor() {}

  ngOnInit(): void {}
}
