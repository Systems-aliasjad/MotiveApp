import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

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
  constructor(private sharedService: SharedService) {
    //HEADER.TERMS_AND_CONDITIONS
    this.sharedService.setHeaderConfig('', true);
  }

  ngOnInit(): void {}
}
