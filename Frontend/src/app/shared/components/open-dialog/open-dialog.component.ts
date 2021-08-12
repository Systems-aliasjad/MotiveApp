import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EOpenTabState } from '../../models/open.enum';

@Component({
    selector: 'app-open-dialog',
    templateUrl: './open-dialog.component.html',
    styleUrls: ['./open-dialog.component.scss'],
})
export class OpenDialogComponent implements OnInit {
    submissionNo;
    currentTab;
    constructor(private router: Router, public dialog: MatDialog, private dialogRef: MatDialogRef<OpenDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
      this.currentTab = data.currentTab;
    }

    ngOnInit(): void {

    }
    onOpenClick() {
      if(this.currentTab == EOpenTabState.Submisison){
        this.router.navigate(['/app/submission'], { queryParams: {id: this.submissionNo}});
        this.dialogRef.close();
      }
    }
    onCancelClick() {}
    onSearchClick() {}
    onNewClick() {}
    onClearanceClick() {}
}
