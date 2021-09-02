import { Component, Input, OnInit } from '@angular/core';
import { IButton } from '../../constants/types';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {
  @Input()
  buttonsConfig: IButton[] = [];
  constructor() {}

  ngOnInit() {}
}
