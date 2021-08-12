import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'checkbox-cell',
  template: `
    <mat-checkbox class="example-margin" [class.hidden]="isHidden" [checked]="params.value == 'Y' ? true : false" [disabled]="true"></mat-checkbox>
  `
})
export class CheckboxRenderer implements ICellRendererAngularComp {
  isReadOnly = false;
  public params: ICellRendererParams;
  isHidden = false;
  constructor() {}

  agInit(params: ICellRendererParams): void {
    this.params = params;
    if (params.colDef && params.colDef.cellEditorParams && params.colDef.cellEditorParams.readOnly) {
      this.isReadOnly = params.colDef.cellEditorParams.readOnly;
    }
    const index = params.eGridCell.className.indexOf('ag-cell-inline-editing');
    if (index >= 0) {
      this.isHidden = true;
    }
  }

  refresh(params: ICellRendererParams): boolean {
    return true;
  }
}
