import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPageHeader } from '../../constants/types';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headerConfig: IPageHeader;

  constructor(private sharedService: SharedService, public router: Router) {
    this.sharedService.getHeaderConfig().subscribe((config) => {
      this.headerConfig = config;
    });
  }
  ngOnInit() {}

  back(): void {
    this.router.navigate('..' as any);
  }
}
