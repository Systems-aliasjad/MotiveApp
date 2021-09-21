import { Component, OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-track-complaint-main',
  template: `laoder works`,
})
export class TrackComplaintMainComponent implements OnInit {
  constructor(private shareService: SharedService) {}

  ngOnInit() {
    this.shareService.setHeaderConfig('', false, true);
  }
}
