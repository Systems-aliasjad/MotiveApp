import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { warningImgSrc } from '../../constants/constants';
import { IMotiveButton } from '../../constants/types';
import { HelperService } from '../../helper/helper.service';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-unknown-error-comes',
  templateUrl: './unknown-error-comes.component.html',
  styleUrls: ['./unknown-error-comes.component.scss'],
})
export class UnknownErrorComesComponent implements OnInit {
  subscription: Subscription;
  Section1Data;
  subHeaderSectionTemplate;
  subHeaderSectionData;
  imgSrc;
  routerResetSuccessful;
  hsiPasswordReset;
  button1: IMotiveButton = {
    type: 'secondary',
    title: 'BUTTONS.DONE',
  };

  constructor(private backendService: BackendService, private router: Router, private activatedRoute: ActivatedRoute, private sharedService: SharedService, private helperService:HelperService) {}

  ngOnInit() {
    this.routerResetSuccessful = this.router.getCurrentNavigation()?.extras?.state?.routerResetSuccessful;
    this.hsiPasswordReset = this.router.getCurrentNavigation()?.extras?.state?.hsiPasswordReset;
    this.subscription = this.activatedRoute.data.subscribe(() => {
      this.updateHeader();
      this.sharedService.setLoader(false);
    });
    this.updatePageContent();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateHeader() {}

  button1Listener() {
    if(!this.routerResetSuccessful){
      this.helperService.handleInternetPasswordResetCase(this.hsiPasswordReset, 'internet');
    } else {
      this.sharedService.TicketCloseAPICallWithURL('thanks');
    }
  }

  updatePageContent() {
    this.imgSrc = warningImgSrc;
    if(!this.routerResetSuccessful){
      this.Section1Data = {
        header: 'MESSAGES.ROUTER_RESTART_UNSUCCESSFUL',
        paragraphs: ['MESSAGES.PLEASE_TRY_AGAIN_LATER'],
      };
    } else {
      this.Section1Data = {
        header: 'MESSAGES.WE_ARE_FACING_SOME_ISSUES',
        paragraphs: ['MESSAGES.PLEASE_TRY_AGAIN_LATER'],
      };
    }
  }
}
