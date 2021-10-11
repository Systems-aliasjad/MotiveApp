import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-seven-layer',
  templateUrl: './seven-layer.component.html',
  styleUrls: ['./seven-layer.component.scss'],
})
export class SevenLayerComponent implements OnInit {
  @Input()
  devices;
  constructor() {}

  ngOnInit() {}
}
