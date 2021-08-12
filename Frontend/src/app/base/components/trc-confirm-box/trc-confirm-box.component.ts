import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trc-confirmation-box',
  templateUrl: './trc-confirm-box.component.html',
  styleUrls: ['./trc-confirm-box.component.css']
})
export class TRCConfirmBoxComponent implements OnInit {
  data: any;

  constructor() { }

  ngOnInit(): void {
   this.data.bodyText = this.data.bodyText || "You won't be able to revert this change."
  }

}
