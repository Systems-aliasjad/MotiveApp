import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IButton } from '../../constants/types';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-router-restart',
  templateUrl: './router-restart.component.html',
  styleUrls: ['./router-restart.component.scss'],
})
export class RouterRestartComponent implements OnInit {
  selectedLang: string;
  instructionList: string[] = ['Unplug the router', 'Wait for 30 seconds', 'Plug the router back in', 'Wait for 5 mins', 'Try to use the internet again'];
  buttonsConfig: IButton[] = [
    {
      title: 'BUTTONS.VIEW_DEVICE_CARE',
      clickListener: () => {
        this.router.navigate(['/device-care']);
      },
      linkTo: '/device-care',
      behaviour: 'secondary',
    },
    {
      title: 'BUTTONS.CLOSE',
      clickListener: () => {
        this.router.navigate(['/thanks']);
      },
      linkTo: '/thanks',
      behaviour: 'link',
    },
  ];
  constructor(private sharedService: SharedService, public router: Router) {
    this.sharedService.setHeaderConfig('HEADER.TERMS_AND_CONDITIONS', false);
  }

  ngOnInit() {
    this.selectedLang = this.sharedService.getDefaultLanguage();
    this.sharedService.setButtonConfig(this.buttonsConfig);
    this.sharedService.setButtonSize({ SM: '12', MD: '6', LG: '6' });
  }
}
