import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMotiveButton } from '../../../shared/components/diagnose-issue/diagnose-issue.component';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-3rd-party-router',
  template: `<app-diagnose-issue [messageSection]="messageSection" [button1]="button1" (button1Click)="button1Listener()" [button2]="button2" (button2Click)="button2Listener()">
  </app-diagnose-issue>`,
})
export class RouterNotReachableOwnRouterComponent implements OnInit {
  messageSection;
  button1: IMotiveButton = {
    title: 'LINKS.DEVICE_CARE',
    type: 'link',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.ISSUE_FIXED',
    type: 'primary',
  };

  button3: IMotiveButton = {
    title: 'BUTTONS.CONTINUE_TO_TROUBLESHOOTING',
    type: 'primary',
  };
  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit() {
    this.messageSection = CustomerJourneyConstants.routerNotReachableOwnRouterMessageSection;
    //this.sharedService.setHeaderConfig('', true);
  }

  async button1Listener() {
    this.router.navigate(['/router-not-reachable-own-router-care']);
  }
  button2Listener() {
    this.router.navigate(['/thanks']);
  }
  button3Listener() {}
}
