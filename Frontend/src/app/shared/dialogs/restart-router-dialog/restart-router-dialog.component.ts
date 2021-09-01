import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restart-router-dialog',
  templateUrl: './restart-router-dialog.component.html',
  styleUrls: ['./restart-router-dialog.component.css'],
})
export class RestartRouterDialog implements OnInit {
  constructor(private location: Location) {}

  ngOnInit() {}

  back(): void {
    this.location.back();
  }
}
