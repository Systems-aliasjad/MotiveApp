import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-tile',
  templateUrl: './tab-tile.component.html',
  styleUrls: ['./tab-tile.component.scss'],
})
export class TabTileComponent implements OnInit {
  @Input()
  imageSrc: string = '';
  @Input()
  case: string = ''; // Success-green | Error-red | Default-grey
  @Input()
  title: string = '';

  constructor() {}

  ngOnInit() {}
}
