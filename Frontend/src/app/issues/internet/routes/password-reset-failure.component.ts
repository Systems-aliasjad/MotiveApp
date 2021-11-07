import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { warningImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'password-reset-faliure',
  template: `<motive-message [imgSrc]="imgSrc" [Section1Data]="Section1Data" [button1]="button1" (button1Click)="button1Listener()"></motive-message>`,
})
export class PasswordResetFaliureComponent implements OnInit {
  subscription: Subscription;
  imgSrc = warningImgSrc;
  Section1Data = {
    header: 'MESSAGES.YOUR_PASSWORD_WASNT_RESET',
    paragraphs: ['MESSAGES.PLEASE_WAIT_WHILE_WE_TRY_TO_RESET_IT_AGAIN', 'MESSAGES.WE_ARE_EXPERIENCING_A_DELAY_IN_RESETTING_YOUR_INTERNET_PASSWORD'],
  };
  button1: IMotiveButton = {
    type: 'secondary',
    title: 'BUTTONS.OK',
    explanatoryNote: '',
  };

  constructor(private router: Router) {}

  ngOnInit() {}

  button1Listener() {
    this.router.navigate(['/thanks']);
  }
}
