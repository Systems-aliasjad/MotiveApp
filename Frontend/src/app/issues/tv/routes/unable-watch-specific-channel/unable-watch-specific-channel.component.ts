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

    // this.sharedService.setHeaderConfig('MESSAGES.CHANNEL_LIST', false);
    this.channelListTitle = 'MESSAGES.CHANNEL_LIST';
    this.channelListContent = 'MESSAGES.PLEASE_SELECT_THE_CHANNEL_YOU_ARE_NOT_ABLE_TO_WATCH_FROM_THE_LIST_BELOW';
    this.buttonText = 'BUTTONS.CONTINUE';

    // const apiRespnse = this.sharedService.getApiResponseData();

    const dummy = [
      {
        serialNo: 'SSID1',

        packageId: 'laksjld',

        packageName: 'SSID2',

        channels: ['defdssa', 'defdssa'],
      },

      {
        serialNo: 'SSID1',

        packageId: 'laksjld',

        packageName: 'SSID2',

        channels: ['defdssa', 'defdssa'],
      },
    ];

    const responseData = dummy;
    responseData.forEach((element) => {
      // apiRespnse?.responseData;
      var channelListIndex = element?.channels;

      channelListIndex.forEach((row) => {
        if (this.radio_list.length === 0) {
          this.radio_list.push({
            id: row,
            name: 'ChannelList',
            value: row,
            text: row,
          });
        } else {
          var alreadyAdded = this.radio_list.find((x) => x.value === row);
          if (alreadyAdded.length === 0) {
            this.radio_list.push({
              id: row,
              name: 'ChannelList',
              value: row,
              text: row,
            });
          }
        }
      });
    });
  }

  headerConfig: IPageHeader = {
    pageTitle: 'MESSAGES.CHANNEL_LIST',
    showBackBtn: true,
  };

  get f() {
    return this.formGroup.controls;
  }

  // radio_list = [
  //   {
  //     id: '1',
  //     name: 'ChannelList',
  //     value: 'radio_1',
  //     text: 'Channel 1',
  //     disabled: false,
  //     checked: false,
  //     color: 'primary',
  //   },
  //   {
  //     id: '2',
  //     name: 'ChannelList',
  //     value: 'radio_2',
  //     text: 'Channel 2',
  //     disabled: false,
  //     checked: false,
  //     color: 'primary',
  //   },
  //   {
  //     id: '3',
  //     name: 'ChannelList',
  //     value: 'radio_3',
  //     text: 'Channel 3',
  //     disabled: false,
  //     checked: false,
  //     color: 'primary',
  //   },

  //   {
  //     id: '4',
  //     name: 'ChannelList',
  //     value: 'radio_4',
  //     text: 'Channel 4',
  //     disabled: false,
  //     checked: false,
  //     color: 'primary',
  //   },

  //   {
  //     id: '5',
  //     name: 'ChannelList',
  //     value: '5',
  //     text: 'Channel is not on the list',
  //     disabled: false,
  //     checked: false,
  //     color: 'primary',
  //   },
  // ];

  SubmitForm() {
    let value = this.formGroup.controls['ChannelList'].value;
    ////Hard coaded value is set to open dialog
    if (value === '5') {
      this.openChannelNotListDialog();
    } else {
      this.router.navigate(['/issues/tv/channel-detail'], { state: { selectedChannel: value } });
    }
  }

  async openChannelNotListDialog() {
    const modal = await this.modalCtrl.create({
      component: ChannelNotListDialogComponent,
    });
    return await modal.present();
  }
}
