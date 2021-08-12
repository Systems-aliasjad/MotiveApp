import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OpenDialogComponent } from 'src/app/shared/components/open-dialog/open-dialog.component';
import { EOpenTabState } from 'src/app/shared/models/open.enum';
import { HeaderService } from '../services/header.service';

@Component({
    selector: 'app-aside',
    templateUrl: './aside.component.html',
    styleUrls: ['./aside.component.scss'],
})
export class AsideComponent implements OnInit {
    open = false;
    dedupShow = false;
    activeMenu = 'Import';
    asideOpener = localStorage.getItem('opener');
    @Input() opener: boolean;
    pageTitle = 'Submission';
    constructor(public dialog: MatDialog,
      public cdr: ChangeDetectorRef,
      public headerService: HeaderService) {}

    ngOnInit() {
      this.headerService.getTitle().subscribe((title) => {
        this.pageTitle = title;
        //     console.log('in get header value header component', this.pageTitle);
        this.cdr.detectChanges();
      });
    }
    ngOnChange() {}

    importClick() {}
    onOpenClick() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;

        dialogConfig.data = {
            currentTab: EOpenTabState.Submisison,
        };
        const dialogRef = this.dialog.open(OpenDialogComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            console.log('after dialog close result=', result);
        });
    }
}
