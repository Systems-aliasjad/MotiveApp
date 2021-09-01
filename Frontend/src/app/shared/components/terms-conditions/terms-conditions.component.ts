import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { Location } from '@angular/common';
export interface ITermsAndConditions {
  head: string;
  body: string[];
}
@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss'],
})
export class TermsConditionsComponent implements OnInit {
  termsCheck: string = '';

  TC: ITermsAndConditions[] = [
    {
      head: 'HEADER.TERMS_AND_CONDITIONS',
      body: ['TERMS_AND_CONDITIONS.PARA1', 'TERMS_AND_CONDITIONS.PARA2'],
    },
    {
      head: 'TERMS_AND_CONDITIONS.HEADER1',
      body: ['TERMS_AND_CONDITIONS.PARA2'],
    },
    {
      head: 'TERMS_AND_CONDITIONS.HEADER1',
      body: ['TERMS_AND_CONDITIONS.PARA2', 'TERMS_AND_CONDITIONS.PARA2'],
    },
    {
      head: 'TERMS_AND_CONDITIONS.HEADER1',
      body: ['TERMS_AND_CONDITIONS.PARA2', 'TERMS_AND_CONDITIONS.PARA2'],
    },
  ];
  constructor(private sharedService: SharedService, private location: Location) {
    this.sharedService.setHeaderConfig('HEADER.TERMS_AND_CONDITIONS', true);
  }

  ngOnInit(): void {}

  AcceptContinue = (event: any) => {
    this.sharedService.setTermsConditions('1');
    this.location.back();
  };
}
