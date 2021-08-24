import { Component, OnInit } from '@angular/core';
import { IPageHeader } from '../../constants/types';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headerConfig: IPageHeader;

  constructor(private sharedService: SharedService) {
    this.headerConfig = this.sharedService.getHeaderConfig();
  }
  async ngOnInit() {}
}
