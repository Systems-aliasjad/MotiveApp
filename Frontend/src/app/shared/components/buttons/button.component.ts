import { Component, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'motive-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input()
  type: 'primary' | 'secondary' | 'link';
  @Input()
  title: string;
  /** @deprecated - Please use parent component for this message. */
  @Input()
  explanatoryNote: string;
  @Input()
  SM: string = '12'; //size
  @Input()
  MD: string = '12'; //size Medium
  @Input()
  LG: string = '12'; //size Large
  @Output()
  clickHandler = new EventEmitter();

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

  handleClick() {
    this.clickHandler.emit();
  }
}
