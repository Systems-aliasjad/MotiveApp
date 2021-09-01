import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  @Input() data: any;
  constructor(private location: Location) {}

  ngOnInit() {}

  back(): void {
    this.location.back();
  }
}
