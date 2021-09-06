import { Component, OnInit } from '@angular/core';

import { IButton } from '../../constants/types';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {
  buttonsConfig: IButton[] = [];
  SM: string; //size
  MD: string; //sizeMd
  LG: string; //sizeLg
  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.getButtonConfig().subscribe((config: IButton[]) => {
      this.buttonsConfig = config;
    });
    this.sharedService.getButtonSize().subscribe((buttonSizes) => {
      this.SM = buttonSizes.SM;
      this.MD = buttonSizes.MD;
      this.LG = buttonSizes.LG;
    });
  }
}
