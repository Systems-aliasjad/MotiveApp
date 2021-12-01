import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { SharedService } from 'src/app/shared/shared.service';
import { ERoutingIds } from '../../../../shared/constants/constants';
import { InternetIssuesDialogSecondComponent } from '../internet-issues-dialog-second/internet-issues-dialog-second.component';

@Component({
  selector: 'app-internet-issues-dialog',
  templateUrl: './internet-issues-dialog.component.html',
  styleUrls: ['./internet-issues-dialog.component.scss'],
})
export class InternetIssuesDialog implements OnInit {
  @Input()
  id: number;
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

  showDialog1 = true;
  subscription: Subscription = new Subscription();
  codeType;
  disable: boolean = false;
  constructor(
    private helperService: HelperService,
    private backendService: BackendService,
    private sharedService: SharedService,
    private modalCtrl: ModalController,
    public router: Router
  ) {}

  ngOnInit() {
    if (this.sharedService.getTryAgainRouterNotReachableFlag() != 0) {
      this.openSecondPopup();
    }
  }

  async openSecondPopup() {
    this.modalCtrl.dismiss();
    const modal = await this.modalCtrl.create({
      component: InternetIssuesDialogSecondComponent,
      componentProps: {
        id: ERoutingIds.routerNotReachable,
      },
    });
    return await modal.present();
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  async SubmitForm() {
    this.modalCtrl.dismiss();
    this.sharedService.setTryAgainRouterNotReachableFlag();
    this.sharedService.setLoader(true);
    this.backendService.bookComplaint({ mobileNo: this.sharedService.getLocalStorage('CUS_MOBILE_NO'), remarks: '', ci7: false }).subscribe(() => {
      this.backendService.getIssueDiagnositic('INTERNET').subscribe((data) => {
        this.sharedService.setLoader(false);
        this.helperService.InternetFlowIdentifier(data?.result?.screenCode, data?.result?.responseData);
      });
    });
  }

  ExitTroubleshoot() {
    this.modalCtrl.dismiss();
    this.router.navigate(['/thanks']);
  }
}
