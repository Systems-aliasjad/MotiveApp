import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { IMotiveButton } from 'src/app/shared/components/diagnose-issue/diagnose-issue.component';
import { EIssueFlow, IssueListDialog } from 'src/app/shared/dialogs/issue-list-dialog/issue-list-dialog.component';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss'],
})
export class ServiceDetailComponent implements OnInit, OnDestroy {
  @Input()
  isPartialLoaded: boolean = false;
  modal: any;
  subscription: Subscription;
  cardList: any[] = [
    {
      heading: 'UNNAMED PHONE',
      IP: '192.168.1.125',
    },
    {
      heading: 'UNNAMED COMPUTER',
      IP: '192.168.1.125',
    },
    {
      heading: 'UNNAMED SMART WATCH',
      IP: '192.168.1.125',
    },
    {
      heading: 'UNNAMED TABLET',
      IP: '192.168.1.125',
    },
    {
      heading: 'UNNAMED PHONE',
      IP: '192.168.1.125',
    },
  ];

  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.ISSUE_FIXED',
  };

  button2: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.CONTINUE_TO_TROUBLESHOOTING',
  };

  constructor(private sharedService: SharedService, private router: Router, private modalCtrl: ModalController, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(() => {
      this.updateHeader();
    });
    this.updatePageContent();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateHeader() {
    if (!this.isPartialLoaded) {
      this.sharedService.setHeaderConfig('HEADER.SERVICE_DEATAIL', false);
    }
  }

  updatePageContent() {}

  button1Listener() {
    this.router.navigate(['/thanks']);
  }

  async button2Listener() {
    this.modal = await this.modalCtrl.create({
      component: IssueListDialog,
      componentProps: {
        flow: EIssueFlow.internetIssue,
      },
    });
    return await this.modal.present();
  }
}
