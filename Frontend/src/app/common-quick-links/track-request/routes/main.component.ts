import { Component, OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-track-request-main',
  template: `laoder works`,
})
export class TrackRequestMainComponent implements OnInit {
  constructor(private shareService: SharedService) {}

  ngOnInit() {
    this.shareService.setHeaderConfig('', false, true);
  }
}
