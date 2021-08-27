import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IPageHeader } from '../../constants/types';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnChanges {
  headerConfig: IPageHeader;

  constructor(private sharedService: SharedService, private cd: ChangeDetectorRef) {
    this.sharedService.getHeaderConfig().subscribe((config) => {
      this.headerConfig = config;
    });
  }
  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('====================================');
    // console.log('asdasd', changes);
    // console.log('====================================');
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }
}
