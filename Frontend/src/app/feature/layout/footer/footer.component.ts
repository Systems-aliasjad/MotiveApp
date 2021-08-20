import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  aboutInfo;
  dbName;
  constructor(private headerService: HeaderService) {}

  ngOnInit() {
    this.aboutInfo = environment.About;
    // this.headerService.getSystemInfo().subscribe(info => {
    //   this.headerService.setDbName(info.database);
    //   this.headerService.setServerName(info.server);
    // });
    this.headerService.getDbName().subscribe((x) => (this.dbName = x));
  }
}
