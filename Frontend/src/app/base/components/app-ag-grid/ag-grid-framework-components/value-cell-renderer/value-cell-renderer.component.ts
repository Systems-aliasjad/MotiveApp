import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-value-cell-renderer',
  templateUrl: './value-cell-renderer.component.html',
  styleUrls: ['./value-cell-renderer.component.css']
})
export class ValueCellRendererComponent implements ICellRendererAngularComp {
  params: any;
  refresh(params: any): boolean {
    return false;
    // throw new Error("Method not implemented.");
  }
  agInit(params: ICellRendererParams): void {
    this.params = params;
  }


}
