import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IFormFieldConfig } from 'src/app/base/components/trc-forms/ITRCFormComponent';
import { TrcFormComponent } from 'src/app/base/components/trc-forms/trc-form/trc-form.component';
import { CommonPopupService } from 'src/app/base/service/common-popup.service';
import { CounterPartyBankAccountHistoryComponent } from '../counter-party-bank-account-history/counter-party-bank-account-history.component';
import { BankAccountService } from '../services/bank-account.service';

@Component({
    selector: 'app-counter-party-bank-account',
    templateUrl: './counter-party-bank-account.component.html',
    styleUrls: ['./counter-party-bank-account.component.scss'],
})
export class CounterPartyBankAccountComponent implements OnInit {
    @Input() producerBranchKey;
    @ViewChild('trcForm') trcForm: TrcFormComponent;
    formData;
    showHistory = false;
    currentAccountKey;
    currentAccountNumber;
    fields: IFormFieldConfig[] = [
        { type: 'input', name: 'accountKey', field: 'accountKey', label: 'Account Key', readOnly: true, colSpan: 3 },
        { type: 'input', name: 'initialAccountKey', field: 'initialAccountKey', label: 'Initial Account Key', readOnly: true, colSpan: 3 },
        { type: 'input', name: 'fullName1', field: 'fullName1', label: 'Bank Name', readOnly: true, colSpan: 6 },
        { type: 'input', name: 'currencyISOCode', field: 'currencyISOCode', label: 'Currency', readOnly: true, colSpan: 3 },
        { type: 'input', name: 'accountNumber', field: 'accountNumber', label: 'Account No', colSpan: 3 },
        { type: 'input', name: 'swiftCode', field: 'swiftCode', label: 'Swift Code', readOnly: true, colSpan: 3 },
        { type: 'input', name: 'bankCode', field: 'bankCode', label: 'Bank Code', readOnly: true, colSpan: 3 },
        { type: 'input', name: 'abaNumber', field: 'abaNumber', label: 'ABA Number', readOnly: true, colSpan: 3 },
        { type: 'input', name: 'subAccountNumber', field: 'subAccountNumber', label: 'Sub Acct No', readOnly: true, colSpan: 3 },
        { type: 'input', name: 'accountName', field: 'accountName', label: 'Acct Name:', readOnly: true, colSpan: 6 },
        { type: 'input', name: 'contactName', field: 'contactName', label: 'Contact Name', readOnly: true, colSpan: 6 },
        { type: 'input', name: 'transitNumber', field: 'transitNumber', label: 'Transit No', readOnly: true, colSpan: 3 },
        { type: 'input', name: 'statusFlag', field: 'statusFlag', label: 'Status', readOnly: true, colSpan: 3 },
        { type: 'input', name: 'ibanNumber', field: 'ibanNumber', label: 'IBAN No', readOnly: true, colSpan: 6 },
        { type: 'input', name: 'sortCode', field: 'sortCode', label: 'Sort Code', readOnly: true, colSpan: 3 },
        { type: 'input', name: 'bsb', field: 'bsb', label: 'BSB', readOnly: true, colSpan: 3 },
        { type: 'textarea', name: 'comments', field: 'comments', label: 'Comment', readOnly: true, colSpan: 12 },
        { type: 'input', name: 'modifiedBy', field: 'modifiedBy', label: 'Last Modified By', readOnly: true, colSpan: 3 },
        { type: 'input', name: 'touchDate', field: 'touchDate', label: 'Last Modified', readOnly: true, colSpan: 3 },
        { type: 'checkbox', name: 'bankAcctDefaultFlag', field: 'bankAcctDefaultFlag', label: 'Debit Bank Default', readOnly: true, colSpan: 3 },
    ];
    constructor(private banckAccountService: BankAccountService, private commonPopupService: CommonPopupService) {}

    ngOnInit(): void {
        this.banckAccountService.getBankAccounts(this.producerBranchKey).subscribe((resp) => {
            console.log('resp', resp);
            if (resp && resp.data && resp.data.length > 0) {
                resp.data.forEach((d) => {
                    d.touchDate = new Date(d.touchDate).toLocaleString();
                    d.statusFlag = d.statusFlag == 'A' ? 'Active' : 'InActive';
                });
            }

            console.log('resp after change', resp);
            this.formData = resp;
        });
    }

    submit($event): void {
        console.log($event);
    }
    onAccountOpen(account) {
        this.currentAccountKey = account.accountKey;
        this.currentAccountNumber = account.accountNumber;
    }
    openBankHistory(flag) {
        this.showHistory = flag;
        // this.commonPopupService.open(CounterPartyBankAccountHistoryComponent, {});
    }
}
