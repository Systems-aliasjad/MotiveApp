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
  disable: boolean = false;
  instructionList: string[] = ['Router is switched on', "The cable from the router is connected to the 'X' port of the wall mounted fibre works"];
  instructionListDialog2: string[] = [
    'We are still unable to reach your router.',
    'It looks like any one of these could be the issue:',
    '1. The router is not switched on',
    '2. The cable isnt connected properly ',
    '3. The router is faulty',
    'Tap Try again later if you want to check the problem later.',
    'Tap Book an appointment if you want to book a technician visit.',
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

    if (this.id === ERoutingIds.routerNotReachable) {
      this.router.navigate(['/issues/internet/router-not-reachable-form']);
    } else if (this.id === ERoutingIds.routerNotReachableOwnRouter) {
      this.router.navigate(['/issues/internet/router-not-reachable-form']);
    } else {
      this.router.navigate(['/issues/internet/book-complaint']);
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
