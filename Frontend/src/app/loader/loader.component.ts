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

  loaderarray: any;
  flagInterval = 0;
  // successMessages: string[] = ['MESSAGES.PLEASE_WAIT_WHILE_OUR_AUTOMATED_SYSTEM_IS_DIAGNOSING_THE_SERVICE', 'MESSAGES.THIS_WILL_TAKE_UP_TO_1_MINUTE'];
  successMessages: string[];
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

  clearGreenPercentage;
  clearGreenArray;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
  
    this.sharedService.getLoader().subscribe((shouldShow: any) => {
      this.shouldShow = shouldShow.loaderState;
      if (shouldShow.loaderState) {
        if (Array.isArray(shouldShow?.messageMain)) {
          this.loaderarray = shouldShow?.messageMain;
        } else if (shouldShow.messageMain !== null) {
          this.successMessages = [shouldShow.messageMain, 'MESSAGES.PLEASE_WAIT_FOR_A_FEW_MINUTES'];
        } else {
          // this.successMessages = ['MESSAGES.PLEASE_WAIT_WHILE_OUR_AUTOMATED_SYSTEM_IS_DIAGNOSING_THE_SERVICE', 'MESSAGES.THIS_WILL_TAKE_UP_TO_1_MINUTE'];
          this.successMessages = ['MESSAGES.PLEASE_WAIT_WHILE_OUR_AUTOMATED_SYSTEM_IS_DIAGNOSING_THE_SERVICE'];
        }
        this.initialize();
      } else {
        this.clearIntervals();
      }
    });
  }

  initialize() {
    if (this.loaderarray) {
      this.showGreenLoader();
      this.clearGreenPercentage = setInterval(() => {
        this.percentageLoaded++;

        if (this.percentageLoaded === 100) {
          this.percentageLoaded = 0;
        }
      }, 2000);
      this.messages=[];
      this.messages.push('MESSAGES.PLEASE_WAIT_WHILE_OUR_AUTOMATED_SYSTEM_IS_DIAGNOSING_THE_SERVICE');
      this.messages.push(this.loaderarray[this.flagInterval]?.message);
      this.flagInterval++;
      this.DynamicScripts();
    } else {
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
  }

  DynamicScripts() {
    this.clearGreenArray = setInterval(() => {
      if (this.flagInterval < this.loaderarray?.length) {
        this.flagInterval++;
        clearInterval(this.clearGreenArray);
        this.DynamicScripts();
      }

      if (this.flagInterval > this.loaderarray?.length) {
        this.showOrangeLoader();
      }
      if (this.flagInterval < this.loaderarray?.length) {
        this.messages.push(this.loaderarray[this.flagInterval]?.message);
      }
    }, this.loaderarray[this.flagInterval]?.time);
  }

  clearIntervals() {
    clearInterval(this.minuteInterval);
    clearInterval(this.percentInterval);
    clearInterval(this.clearGreenPercentage);
    clearInterval(this.clearGreenArray);

    this.minuteInterval = 0;
    this.percentInterval = 0;
    this.percentageLoaded = 0;
    this.loaderarray=null;
    this.messages=null;
    this.flagInterval=0;

  }

  ngOnDestroy() {
    this.clearIntervals();
  }

  showOrangeLoader() {
    clearInterval(this.clearGreenArray);
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
