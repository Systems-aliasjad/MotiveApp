import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { SharedService } from 'src/app/shared/shared.service';
import { ERoutingIds } from '../../../../shared/constants/constants';

@Component({
  selector: 'app-internet-issues-dialog-second',
  templateUrl: './internet-issues-dialog-second.component.html',
  styleUrls: ['./internet-issues-dialog-second.component.scss'],
})
export class InternetIssuesDialogSecondComponent implements OnInit {
  showDialog1 = true;
  subscription: Subscription = new Subscription();
  codeType;
  @Input()
  id: number;
  @Input()
  otherFlow;
  disable: boolean = false;
  @Input()
  portNumber:any;
  instructionList: string[] = ['MESSAGES.ROUTER_IS_SWITCHED_ON', "MESSAGES.THE_CABLE_FROM_THE_ROUTER_IS_CONNECTED_TO_THE_PORTNUMBER_PORT_OF_THE_WALL_MOUNTED_FIBRE_WORKS"];
  instructionListDialog2: string[] = [
    'MESSAGES.WE_ARE_STILL_UNABLE_TO_REACH_YOUR_ROUTER',
    'MESSAGES.IT_LOOKS_LIKE_ANY_ONE_OF_THESE_COULD_BE_THE_ISSUE',
    'MESSAGES.THE_ROUTER_IS_NOT_SWITCHED_ON',
    'MESSAGES.THE_CABLE_ISNT_CONNECTED_PROPERLY_NUMBER',
    'MESSAGES.THE_ROUTER_IS_FAULTY',
    'MESSAGES.TAP_TRY_AGAIN_LATER_IF_YOU_WANT_TO_CHECK_THE_PROBLEM_LATER',
    'MESSAGES.TAP_BOOK_AN_APPOINTMENT_IF_YOU_WANT_TO_BOOK_A_TECHNICIAN_VISIT',
  ];
  constructor(
    private helperService: HelperService,
    private backendService: BackendService,
    private sharedService: SharedService,
    private modalCtrl: ModalController,
    public router: Router
  ) {}
  ngOnInit() {
    // if (this.sharedService.getTryAgainRouterNotReachableFlag() > 3) {
    //   this.disable = true;
    // }
    this.sharedService.resetTryAgainRouterNotReachableFlag();
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  SubmitForm() {
    this.showDialog1 = false;
  }

  GoToMainForm() {
    this.modalCtrl.dismiss();
    if(this.otherFlow) {
      const data = this.sharedService.getSecondInternetIssueDialogFromOtherApiResponse();
      this.helperService.otherFlowIdentifier(data?.result?.screenCode, data?.result?.responseData);
    } else {
      if (this.id === ERoutingIds.routerNotReachable) {
        this.router.navigate(['/issues/internet/router-not-reachable-form']);
      } else if (this.id === ERoutingIds.routerNotReachableOwnRouter) {
        this.router.navigate(['/issues/internet/router-not-reachable-form']);
      } else {
        this.router.navigate(['/issues/internet/book-complaint']);
      }
    }
  }

  TryAgain() {
   
   this.sharedService.TicketCloseAPICallWithURL('thanks');
    // this.sharedService.setTryAgainRouterNotReachableFlag();
    // this.sharedService.setLoader(true);
    // this.backendService.bookComplaint({ mobileNo: this.sharedService.getLocalStorage('CUS_MOBILE_NO'), remarks: '', issueResolved: false }).subscribe(() => {
    //   this.backendService.getIssueDiagnositic('INTERNET').subscribe((data) => {
    //     this.sharedService.setLoader(false);
    //     this.helperService.InternetFlowIdentifier(data?.result?.screenCode, data?.result?.responseData);
    //   });
    // });
  }
}
