import { Injectable, Output, EventEmitter } from '@angular/core';
import { PopupService } from 'ag-grid-community';
import { CommonPopupService } from '../base/service/common-popup.service';
import { notificationTypes } from './constants/types';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
    providedIn: 'root',
})
export class SharedService {
    @Output() agGridSelectEditorValueChange: EventEmitter<any> = new EventEmitter<any>();
    globalFileId: string;

    constructor(
        private matSnackBar:MatSnackBar,
        private popupService:CommonPopupService) {}

    getSubscriberForAgGridSelectEditorValueChange(): EventEmitter<any> {
        if (this.agGridSelectEditorValueChange.observers == null) {
            this.agGridSelectEditorValueChange = new EventEmitter();
        }
        return this.agGridSelectEditorValueChange;
    }
    
}
