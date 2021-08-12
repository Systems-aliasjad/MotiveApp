import { Component, OnInit, Input } from '@angular/core';
import { TRCGridComponent } from '../trc-grid/trcgrid.component';

@Component({
  selector: 'trc-grid-search',
  templateUrl: './trc-grid-search.component.html',
  styleUrls: ['./trc-grid-search.component.css']
})
export class TrcGridSearchComponent implements OnInit {

  @Input() GridID:TRCGridComponent;
  constructor() { }

  ngOnInit(): void {
  }

  onSearch($event){
    if(!this.GridID || !this.GridID.gridAPI){
      console.error('TRCGridComponent: Provided #GridID as input parameter is null or gridAPI is not initilaized.')
      return;
    }
    const searchText = $event.target.value;
    this.GridID.gridAPI.setQuickFilter(searchText);
  }

}
