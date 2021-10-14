import { Component, Input, OnInit } from '@angular/core';
import { SVGs } from 'src/app/shared/constants/constants';
import { IOntDetail, IRouterDetail } from 'src/app/shared/constants/types';

@Component({
  selector: 'app-seven-layer',
  templateUrl: './seven-layer.component.html',
  styleUrls: ['./seven-layer.component.scss'],
})
export class SevenLayerComponent implements OnInit {
  @Input()
  connectedDevices;
  @Input()
  ontConfig: IOntDetail;
  @Input()
  routerConfig: IRouterDetail;
  @Input()
  etisalatConfig;

  constructor() {}

  ngOnInit() {}

  onImgError(event) {
    event.target.src = SVGs.ont.default;
  }
}
