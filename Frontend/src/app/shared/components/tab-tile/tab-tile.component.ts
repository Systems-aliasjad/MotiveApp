import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-tab-tile',
  templateUrl: './tab-tile.component.html',
  styleUrls: ['./tab-tile.component.scss'],
})
export class TabTileComponent implements OnInit {
  @Input() tileConfig: any;

  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit() {}

  onImgError(event) {
    event.target.src = 'assets/images/ont/2424.jpg';
  }
}

export class TabTiles {
  className: string;
  imgPath: string;
  altText: string;
  text1: string;
  text2: string;
}
