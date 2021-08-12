import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TRCCommonPopupComponent } from '../components/trc-common-popup/trc-common-popup.component';
import { notificationTypes } from '../../shared/constants/types';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TrcFormComponent } from '../components/trc-forms/trc-form/trc-form.component';
import { IFormConfig } from '../components/trc-forms/ITRCFormComponent';
import { TRCConfirmBoxComponent } from '../components/trc-confirm-box/trc-confirm-box.component';

@Injectable({
    providedIn: 'root'
})
export class CommonPopupService {
    constructor(private dialog: MatDialog, private matSnackBar: MatSnackBar) {}
    open(component: any, data: any) {
        data.contentComponent = component;
        this.dialog.open(TRCCommonPopupComponent, {
            width: data.width || '500px',
            height: data.height || '250px',
            data: data,
            disableClose: true
        });
    }
    /*
    Common notification alerts for all types error | info | warning
    Return: void.
    @params:
    1. 'info' | 'error' | 'warning'
    2. 'message'
    3. 'duration'
    */
    notify(type: notificationTypes, message: string, duration: number = 2000) {
        this.matSnackBar.open(message, '', {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            duration: duration,
            panelClass: [`trc-notify-${type}`]
        });
    }
    /*
  Common confirm box popup.
  Return void.
  @params:
  1. 'message'
  2. 'callback($event,data)
  */
    confirmBox(message, callback: Function, extras:any={cancelButtonText:"Cancel",confirmButtonText:"Confirm"}) {
        this.open(TRCConfirmBoxComponent, {
            hideHeader: true,
            hideFooter: true,
            popupBodyClasses: [''],
            bodyText: message,
            width: '380px',
            height: '210px',
            callback: callback,
            extras:extras
        });
    }

    /**
     * Display dynamic from in popup based on configuration IFromConfig.ts
     * @param formConfig
     * @param callback
     */
    form(formConfig: IFormConfig, data?: any, callback?: any) {

        this.open(TrcFormComponent, {
            title: formConfig.extended ? formConfig.extended.title : 'Form',
            hideHeader: formConfig.extended ? formConfig.extended.hideHeader : false,
            hideFooter: formConfig.extended ? formConfig.extended.hideFooter : true,
            fields: formConfig.fields,
            width: formConfig.width || '700px',
            height: formConfig.height || '650px',
            data: data,
            callback:formConfig.callback
        });
    }
}
