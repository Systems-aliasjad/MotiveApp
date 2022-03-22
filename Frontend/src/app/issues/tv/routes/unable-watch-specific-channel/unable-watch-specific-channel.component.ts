import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ChannelNotListDialogComponent } from '../../dialogs/channel-not-list-dialog/channel-not-list-dialog.component';
import { SharedService } from '../../../../shared/shared.service';
import { regExps, errorMessages } from '../../../../shared/validators/validations';
import { IPageHeader } from 'src/app/shared/constants/types';

@Component({
  selector: 'app-unable-watch-specific-channel',
  templateUrl: './unable-watch-specific-channel.component.html',
  styleUrls: ['./unable-watch-specific-channel.component.scss'],
})
export class UnableWatchSpecificChannelComponent implements OnInit, OnDestroy {
  public formGroup: FormGroup;
  error = errorMessages;
  codeType;
  buttonText;
  subscription: Subscription;
  channelListTitle;
  channelListContent;
  radio_list: any = [];
  constructor(
    private modalCtrl: ModalController,
    private activatedRoute: ActivatedRoute,
    private sharedService: SharedService,
    private formBuilder: FormBuilder,
    public router: Router
  ) {
    this.codeType = this.router.url;
    this.subscription = this.activatedRoute.data.subscribe((data) => {
      this.codeType = data.id;
      this.initialization();
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {}

  initialization() {
    this.sharedService.setDefaultValues();
    this.formGroup = this.formBuilder.group({
      ChannelList: ['', [Validators.required]],
    });

   
    this.channelListTitle = 'MESSAGES.CHANNEL_LIST';
    this.channelListContent = 'MESSAGES.PLEASE_SELECT_THE_CHANNEL_YOU_ARE_NOT_ABLE_TO_WATCH_FROM_THE_LIST_BELOW';
    this.buttonText = 'BUTTONS.CONTINUE';


    const responseData = this.sharedService.getApiResponseData()?.result?.responseData;
    responseData?.forEach((element) => {
      this.radio_list.push({
            id: element,
            name: 'ChannelList',
            value: element,
            text: element,
          });
    });

     this.radio_list.push({
            id: 'lastvalue',
            name: 'ChannelList',
            value: 'lastvalue',
            text: 'Channel is not on the list',
          });


  }

  headerConfig: IPageHeader = {
    pageTitle: 'MESSAGES.CHANNEL_LIST',
    showBackBtn: false,
  };

  get f() {
    return this.formGroup.controls;
  }


  SubmitForm() {
    let value = this.formGroup.controls['ChannelList'].value;
    ////Hard coaded value is set to open dialog
    if (value === 'lastvalue') {
      this.openChannelNotListDialog();
    } else {
      this.router.navigate(['/issues/tv/transfer-package/step1'], { state: { selectedChannel: value } });
    }
  }

  async openChannelNotListDialog() {
    const modal = await this.modalCtrl.create({
      component: ChannelNotListDialogComponent,
    });
    return await modal.present();
  }
}
