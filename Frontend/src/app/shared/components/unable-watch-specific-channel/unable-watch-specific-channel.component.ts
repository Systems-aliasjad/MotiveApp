import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ERoutingIds } from '../../constants/constants';
import { ChannelNotListDialogComponent } from '../../dialogs/channel-not-list-dialog/channel-not-list-dialog.component';
import { SharedService } from '../../shared.service';
import { regExps, errorMessages } from '../../validators/validations';

@Component({
  selector: 'app-unable-watch-specific-channel',
  templateUrl: './unable-watch-specific-channel.component.html',
  styleUrls: ['./unable-watch-specific-channel.component.scss'],
})
export class UnableWatchSpecificChannelComponent implements OnInit {
  public formGroup: FormGroup;
  error = errorMessages;
  codeType;
  buttonText;

  channelListTitle;
  channelListContent;
  constructor(
    private modalCtrl: ModalController,
    private activatedRoute: ActivatedRoute,
    private sharedService: SharedService,
    private formBuilder: FormBuilder,
    public router: Router
  ) {
    this.codeType = this.router.url;
    this.activatedRoute.data.subscribe((data) => {
      this.codeType = data.id;
    });
  }

  routeLinkHelper(arr) {
    return arr.map((obj) => {
      return {
        obj,
        clickListener: () => {
          obj?.customListner ? this[obj.customListner]() : this.router.navigate([obj.linkTo]);
        },
      };
    });
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      ChannelList: ['', [Validators.required]],
    });

    this.channelListTitle = 'CHANNEL_LIST.TITLE';
    this.channelListContent = 'CHANNEL_LIST.CONTENT';
    this.buttonText = 'BUTTONS.CONTINUE';
  }

  get f() {
    return this.formGroup.controls;
  }

  radio_list = [
    {
      id: '1',
      name: 'ChannelList',
      value: 'radio_1',
      text: 'Channel 1',
      disabled: false,
      checked: false,
      color: 'primary',
    },
    {
      id: '2',
      name: 'ChannelList',
      value: 'radio_2',
      text: 'Channel 2',
      disabled: false,
      checked: false,
      color: 'primary',
    },
    {
      id: '3',
      name: 'ChannelList',
      value: 'radio_3',
      text: 'Channel 3',
      disabled: false,
      checked: false,
      color: 'primary',
    },

    {
      id: '4',
      name: 'ChannelList',
      value: 'radio_4',
      text: 'Channel 4',
      disabled: false,
      checked: false,
      color: 'primary',
    },

    {
      id: '5',
      name: 'ChannelList',
      value: '5',
      text: 'Channel is not on the list',
      disabled: false,
      checked: false,
      color: 'primary',
    },
  ];

  SubmitForm() {
    let value = this.formGroup.controls['ChannelList'].value;
    ////Hard coaded value is set to open dialog
    if (value === '5') {
      this.openChannelNotListDialog();
    }
  }

  async openChannelNotListDialog() {
    const modal = await this.modalCtrl.create({
      component: ChannelNotListDialogComponent,
    });
    return await modal.present();
  }
}
