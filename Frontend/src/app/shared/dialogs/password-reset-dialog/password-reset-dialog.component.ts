import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'password-reset-dialog',
  templateUrl: './password-reset-dialog.component.html',
  styleUrls: ['./password-reset-dialog.component.css'],
})
export class PasswordResetDialog implements OnInit {
  constructor(private location: Location) {}

  ngOnInit() {}

  back(): void {
    this.location.back();
  }
}
