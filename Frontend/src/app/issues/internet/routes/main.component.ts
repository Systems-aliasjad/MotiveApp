import { Component, OnInit } from '@angular/core';

import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-main',
  template: `laoder works`,
})
export class MainComponent implements OnInit {
  constructor(private shareService: SharedService) {}

  ngOnInit() {
    this.shareService.setHeaderConfig('', false, true);
  }
}
