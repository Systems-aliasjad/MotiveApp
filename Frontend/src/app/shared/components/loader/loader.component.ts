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
  almostThere: string = 'Almost there';
  message1: string[] = ['Please wait while our automated system is diagnosing the service.', 'This will take up to 1 minute'];
  message2: string = 'It is taking longer than expected. Kindly wait';
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.percentageLoaded++;
    }, this.oneMinutePart100);

    setInterval(() => {
      this.percentageLoaded = 0;
      this.lateResponse = true;
    }, this.oneMinute);
  }
}
