import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IMotiveButton } from 'src/app/shared/constants/types';

export class IUnableToConnectContent {
  imgSrc: string;
  listItems?: ListItems[];
  constructor() {
    this.imgSrc = '';
  }
}

export class ListItems {
  text: string;
  children: ListItems[];
  constructor() {
    this.children = [];
  }
}

@Component({
  selector: 'app-unable-to-connect',
  templateUrl: './unable-to-connect.component.html',
  styleUrls: ['./unable-to-connect.component.scss'],
})
export class UnableToConnectComponent implements OnInit {
  @Input()
  unableToConnectContent: IUnableToConnectContent;
  @Input()
  button1: IMotiveButton;
  @Output()
  button1Click = new EventEmitter();

  @Input()
  button2: IMotiveButton;
  @Output()
  button2Click = new EventEmitter();

  @Input()
  button3: IMotiveButton;
  @Output()
  button3Click = new EventEmitter();

  myBtnSize: string;
  constructor(private router: Router) {}

  ngOnInit() {
    console.log(this.unableToConnectContent);
    this.myBtnSize = this.button3 ? '6' : '12';
  }

  button1Listener() {
    this.button1Click.emit();
  }

  button2Listener() {
    this.button2Click.emit();
  }

  button3Listener() {
    this.button3Click.emit();
  }
}
