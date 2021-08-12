import { Component, OnInit } from '@angular/core';
import { ICellEditorAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-checkbox-editor',
  templateUrl: './checkbox-editor.component.html',
  styleUrls: ['./checkbox-editor.component.css']
})
export class CheckboxEditorComponent implements ICellEditorAngularComp {
  inputValue;
  isReadOnly;
  isHidden = false;

  constructor() {}

  agInit(params: any): void {
    this.inputValue = params.value == 'Y' ? true : false;
    this.isReadOnly = params.readOnly;
  }

  getValue(): any {
    return this.inputValue == true ? 'Y' : 'N';
  }

  isPopup(): boolean {
    return false;
  }
  getPopupPosition?(): string {
    return 'over';
  }
  isCancelBeforeStart?(): boolean {
    return false;
  }
  isCancelAfterEnd?(): boolean {
    return false;
  }
}
