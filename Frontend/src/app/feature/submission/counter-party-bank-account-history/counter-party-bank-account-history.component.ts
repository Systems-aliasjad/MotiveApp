import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import historyHeader from '../../../../assets/configs/account-history-columndef.json';
import { BankAccountService } from '../services/bank-account.service';

@Component({
    selector: 'app-counter-party-bank-account-history',
    templateUrl: './counter-party-bank-account-history.component.html',
    styleUrls: ['./counter-party-bank-account-history.component.scss'],
})
export class CounterPartyBankAccountHistoryComponent implements OnInit, OnChanges {
    @Input() accountKey;
    @Input() accountNumber;
    historyData;
    colDef = historyHeader;
    constructor(public bankAccountService: BankAccountService) {}

    ngOnInit(): void {
      //  if (this.accountKey) {
            this.loadData();
      //  }
    }
    ngOnChanges(changes: SimpleChanges): void {
        if (changes.accountKey) {
            this.loadData();
        }
    }
    loadData() {
        this.bankAccountService.getBankAccountHistory(this.accountKey).subscribe((resp) => {
            console.log('history resp', resp);
            if(resp && resp.errors && resp.errors.length >0){
              this.historyData  = [];
            } else {
              this.historyData = resp.data;
            }

        }, err => {
          this.historyData  = [];
        });
    }
}
