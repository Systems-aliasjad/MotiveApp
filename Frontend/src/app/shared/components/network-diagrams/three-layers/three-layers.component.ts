import { Component, Input, OnInit } from '@angular/core';
import { IOntDetail, IRouterDetail } from 'src/app/shared/constants/types';

@Component({
  selector: 'app-three-layers',
  templateUrl: './three-layers.component.html',
  styleUrls: ['./three-layers.component.scss'],
})
export class ThreeLayersComponent implements OnInit {
  @Input() ontConfig: IOntDetail;
  @Input() routerConfig: IRouterDetail;
  @Input() etisalatConfig;
  constructor() {}

  ngOnInit() {}
}
