import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { warningImgSrc } from '../../constants/constants';
import { IMotiveButton } from '../../constants/types';
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
  button1: IMotiveButton = {
    type: 'secondary',
    title: 'BUTTONS.DONE',
  };

  constructor(private backendService: BackendService, private router: Router, private activatedRoute: ActivatedRoute, private sharedService: SharedService) {}

  ngOnInit() {
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
    this.backendService.bookComplaint({ mobileNo: this.sharedService.getLocalStorage('CUS_MOBILE_NO'), remarks: '', ci7: false, issueResolved: false }).subscribe(() => {});
    this.router.navigate(['/thanks']);
  }

  updatePageContent() {
    this.imgSrc = warningImgSrc;
    this.Section1Data = {
      header: 'MESSAGES.WE_ARE_FACING_SOME_ISSUES',
      paragraphs: ['MESSAGES.PLEASE_TRY_AGAIN_LATER'],
    };
  }
}
