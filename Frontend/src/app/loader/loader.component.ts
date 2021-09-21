import { Component, OnInit } from '@angular/core';

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
  successMessages: string[] = ['LOADER.SUCCESS_BODY_1', 'LOADER.SUCCESS_BODY_2'];
  faliureMessages: string[] = ['LOADER.FALIURE_BODY'];
  messages: string[] = [];
  constructor() {}

  ngOnInit(): void {
    this.messages = this.successMessages;
    setInterval(() => {
      this.percentageLoaded++;
    }, this.oneMinutePart100);

    setInterval(() => {
      this.percentageLoaded = 0;
      this.lateResponse = true;
      this.messages = this.faliureMessages;
    }, this.oneMinute);
  }
}
