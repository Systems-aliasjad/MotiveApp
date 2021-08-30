import { Component, OnInit } from '@angular/core';
import { IPageHeader } from '../../constants/types';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-router-restart',
  templateUrl: './router-restart.component.html',
  styleUrls: ['./router-restart.component.scss'],
})
export class RouterRestartComponent implements OnInit {
  selectedLang: string;
  instructionList: string[] = ['Unplug the router', 'Wait for 30 seconds', 'Plug the router back in', 'Wait for 5 mins', 'Try to use the internet again'];

  constructor(private sharedService: SharedService) {
    this.sharedService.setHeaderConfig('HEADER.TERMS_AND_CONDITIONS', false);
  }

  ngOnInit() {
    this.selectedLang = this.sharedService.getDefaultLanguage();
  }
}
