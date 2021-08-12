import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IFormFieldConfig } from 'src/app/base/components/trc-forms/ITRCFormComponent';
import { TrcFormComponent } from 'src/app/base/components/trc-forms/trc-form/trc-form.component';
import { CounterPartyBankAccountComponent } from '../counter-party-bank-account/counter-party-bank-account.component';
import { BankAccountService } from '../services/bank-account.service';

@Component({
    selector: 'app-counter-party-detail',
    templateUrl: './counter-party-detail.component.html',
    styleUrls: ['./counter-party-detail.component.scss'],
})
export class CounterPartyDetailComponent implements OnInit {
    @ViewChild('bankDetail') bankDetail: CounterPartyBankAccountComponent;
    producerBranchKey;
    currentTab = 0;
    title;
    showHistory = false;
    constructor(
        public dialog: MatDialog,
        //  private dialogRef: MatDialogRef<CounterPartyDetailComponent>,
        @Inject(MAT_DIALOG_DATA) data
    ) {
        this.producerBranchKey = data.producerBranchKey;
        this.title = data.title;
        console.log('producerBranchKey', this.producerBranchKey);
    }

    ngOnInit(): void {}

    submit($event): void {
        console.log($event);
    }
    onHistoryClick() {
        this.showHistory = true;
        this.bankDetail.openBankHistory(this.showHistory);
    }
    onCloseHistoryClick() {
      this.showHistory = false;
      this.bankDetail.openBankHistory(this.showHistory);
  }
}
