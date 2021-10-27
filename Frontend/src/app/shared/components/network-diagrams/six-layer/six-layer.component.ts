import { Component, Input, OnInit } from '@angular/core';
import { SVGs } from 'src/app/shared/constants/constants';
import { IOntDetail, IRouterDetail } from 'src/app/shared/constants/types';

@Component({
  selector: 'app-six-layer',
  templateUrl: './six-layer.component.html',
  styleUrls: ['./six-layer.component.scss'],
})
export class SixLayerComponent implements OnInit {
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
