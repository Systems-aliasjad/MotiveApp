import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-main',
  template: `loader works`,
})
export class MainComponent implements OnInit {
  constructor(private shareService: SharedService) {}

  ngOnInit() {
    this.shareService.setHeaderConfig('', false, true);
  }
}
