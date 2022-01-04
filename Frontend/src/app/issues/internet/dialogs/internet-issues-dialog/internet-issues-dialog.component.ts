import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { SharedService } from 'src/app/shared/shared.service';
import { ERoutingIds, LoaderScriptsEnum } from '../../../../shared/constants/constants';
import { InternetIssuesDialogSecondComponent } from '../internet-issues-dialog-second/internet-issues-dialog-second.component';

@Component({
  selector: 'app-internet-issues-dialog',
  templateUrl: './internet-issues-dialog.component.html',
  styleUrls: ['./internet-issues-dialog.component.scss'],
})
export class InternetIssuesDialog implements OnInit {
  @Input()
  id: number;
  @Input()
  portNumber: any;
  @Input()
  Ci9Flag = false;
  @Input()
  otherFlow = false;
  instructionList: string[] = ['MESSAGES.ROUTER_IS_SWITCHED_ON'];


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
    this.instructionList.push('MESSAGES.THE_CABLE_FROM_THE_ROUTER_IS_CONNECTED_TO_THE_PORTNUMBER_PORT_OF_THE_WALL_MOUNTED_FIBRE_WORKS')
    if (this.sharedService.getTryAgainRouterNotReachableFlag() !== 0) {
      this.openSecondPopup();
    }
  }

  async openSecondPopup() {
    this.modalCtrl.dismiss();
    const modal = await this.modalCtrl.create({
      component: InternetIssuesDialogSecondComponent,
      componentProps: {
        id: ERoutingIds.routerNotReachable,
        portNumber: this.portNumber,
        otherFlow: this.otherFlow,
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
    if (this?.Ci9Flag) {
      const data = this.sharedService.getApiResponseData();
      data.routerDetails.isReachable = true;
      if(this.otherFlow) {
        this.helperService.otherFlowIdentifier('CI9', data);
      } else {
        this.helperService.InternetFlowIdentifier('CI9', data);
      }
    } else {
      var scriptArray = this.sharedService.GetLoaderDataByID(LoaderScriptsEnum.ROUTER_MANAGED_BUT_NOT_REACHABLE);
      this.sharedService.setLoader(true, scriptArray);
      this.backendService.nextSignal('next').subscribe((data) => {
        this.sharedService.setLoader(false);
        this.sharedService.SetTsOutCome(data?.result?.responseData?.tsOutcome??'');
        if(this.otherFlow){
          this.sharedService.setSecondInternetIssueDialogFromOtherApiResponse(data);
          this.helperService.otherFlowIdentifier(data?.result?.screenCode, data?.result?.responseData);
        } else {
          this.helperService.InternetFlowIdentifier(data?.result?.screenCode, data?.result?.responseData);
        }
      });
    }
    // this.backendService.bookComplaint({ mobileNo: this.sharedService.getLocalStorage('CUS_MOBILE_NO'), remarks: '', issueResolved: false }).subscribe(() => {
    //   this.backendService.getIssueDiagnositic('INTERNET').subscribe((data) => {
    //     this.sharedService.setLoader(false);
    //     this.helperService.InternetFlowIdentifier(data?.result?.screenCode, data?.result?.responseData);
    //   });
    // });
  }

  ExitTroubleshoot() {
    this.modalCtrl.dismiss();
    this.router.navigate(['/thanks']);
  }
}
