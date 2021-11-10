import { Component, OnDestroy, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit, OnDestroy {
  percentageLoaded: number = 0;
  shouldShow: boolean = false;
  lateResponse: boolean = false;
  oneMinute: number = 60000;
  oneMinutePart100 = this.oneMinute / 100;
  successMessages: string[] = ['MESSAGES.PLEASE_WAIT_WHILE_OUR_AUTOMATED_SYSTEM_IS_DIAGNOSING_THE_SERVICE', 'MESSAGES.THIS_WILL_TAKE_UP_TO_1_MINUTE'];
  faliureMessages: string[] = ['MESSAGES.IT_IS_TAKING_LONGER_THAN_EXPECTED_KINDLY_WAIT'];
  messages: string[] = [];
  minuteInterval;
  percentInterval;

  //for loader
  successLoader: AnimationOptions = {
    path: './assets/images/loader/Green_Loader_app.json',
  };

  warningLoader: AnimationOptions = {
    path: './assets/images/loader/Orange_Loader_app.json',
  };

  optionsLoader;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.getLoader().subscribe((shouldShow: any) => {
      this.shouldShow = shouldShow.loaderState;
      if (shouldShow.loaderState) {
        this.initialize();
        if(shouldShow.messageMain !== null){
          this.successMessages = []
          this.successMessages.push(shouldShow.messageMain)
        }
        if(shouldShow.messageSub !== null){
          this.successMessages.push(shouldShow.messageSub)
        }
      } else {
        this.clearIntervals();
      }
    });
  }

  initialize() {
    if (this.percentInterval === undefined || this.percentInterval === 0) {
      this.showGreenLoader();
      this.percentInterval = setInterval(() => {
        this.percentageLoaded++;
        if (this.percentageLoaded === 100) {
          this.showOrangeLoader();
        }
      }, this.oneMinutePart100);

      this.minuteInterval = setInterval(() => {
        this.showOrangeLoader();
      }, this.oneMinute);
    }
  }

  clearIntervals() {
    clearInterval(this.minuteInterval);
    clearInterval(this.percentInterval);
    this.minuteInterval = 0;
    this.percentInterval = 0;
    this.percentageLoaded = 0;
  }

  ngOnDestroy() {
    this.clearIntervals();
  }

  showOrangeLoader() {
    this.percentageLoaded = 0;
    this.lateResponse = true;
    this.messages = this.faliureMessages;
    this.optionsLoader = this.warningLoader;
  }

  showGreenLoader() {
    this.messages = this.successMessages;
    this.optionsLoader = this.successLoader;
  }
}
