import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'trc-multi-col-lookup',
  templateUrl: './trc-multi-col-lookup.component.html',
  styleUrls: ['./trc-multi-col-lookup.component.scss']
})
export class TrcMultiColLookupComponent implements OnInit {
  @Input() label = '';
  @Input() multiSelect: boolean = false;
  @Input() columns = [];
  @Input() data: any[];
  @Input() displayCol;
  @Output() selectedItem: any = new EventEmitter<any>();
  
  selected;
  constructor() { }

  ngOnInit(): void {

  }
  onSelectionChange(event) {
    this.selectedItem.emit(this.selected);
  //  this.selected = (this.displayCol && this.displayCol!= '' ? this.selected[this.displayCol]: this.selected[0]);
  }

}
