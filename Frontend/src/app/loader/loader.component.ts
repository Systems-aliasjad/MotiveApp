import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  percentageLoaded: number = 0;
  lateResponse: boolean = false;
  oneMinute: number = 60000;
  oneMinutePart100 = this.oneMinute / 100;
  successMessages: string[] = ['MESSAGES.PLEASE_WAIT_WHILE_OUR_AUTOMATED_SYSTEM_IS_DIAGNOSING_THE_SERVICE', 'MESSAGES.THIS_WILL_TAKE_UP_TO_1_MINUTE'];
  faliureMessages: string[] = ['MESSAGES.IT_IS_TAKING_LONGER_THAN_EXPECTED_KINDLY_WAIT'];
  messages: string[] = [];

  //for loader
  successLoader: AnimationOptions = {
    path: '/assets/images/loader/Green_Loader_app.json',
  };

  warningLoader: AnimationOptions = {
    path: '/assets/images/loader/Orange_Loader_app.json',
  };

  optionsLoader;

  constructor() {}

  ngOnInit(): void {
    this.messages = this.successMessages;
    this.optionsLoader = this.successLoader;

    setInterval(() => {
      this.percentageLoaded++;
    }, this.oneMinutePart100);

    setInterval(() => {
      this.percentageLoaded = 0;
      this.lateResponse = true;
      this.messages = this.faliureMessages;
      this.optionsLoader = this.warningLoader;
    }, this.oneMinute);
  }
}
