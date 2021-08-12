import { Component, Inject, OnInit } from '@angular/core';
import counterPartyHeader from '../../../../assets/configs/counter-party-columndef.json';
import { ISearch } from '../models/search.model';
import { CounterpartySearchService } from '../services/counterparty-search.service';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonPopupService } from 'src/app/base/service/common-popup.service';
import { ECounterpartySearchType } from '../models/search.enum';

@Component({
    selector: 'app-counter-party-search',
    templateUrl: './counter-party-search.component.html',
    styleUrls: ['./counter-party-search.component.scss'],
})
export class CounterPartySearchComponent implements OnInit {
    searchText = '';
    typeFlag;
    searchTitle = '';
    colDef = counterPartyHeader;
    pageSize = 20;
    totalPages = 10;
    selectedRow;
    glTypeCode;
    constructor(
        private searchService: CounterpartySearchService,
        public dialog: MatDialog,
        private dialogRef: MatDialogRef<CounterPartySearchComponent>,
        @Inject(MAT_DIALOG_DATA) data,
        private popupService: CommonPopupService
    ) {
        this.searchText = data.searchText;
        this.typeFlag = data.typeFlag;
        this.searchTitle = data.searchTitle;
    }

    ngOnInit(): void {
        this.searchService.getCompanyInfo().subscribe((resp) => {
            console.log('GL_TYPECODE', resp);
            if (resp && resp.data && resp.data.gl_type_cd) {
                this.glTypeCode = resp.data.gl_type_cd;
            } else {
                this.glTypeCode = 1;
            }
            let vendorField = this.colDef.find((x) => x.field == 'macola_vendor_no');
            let wireField = this.colDef.find((x) => x.field == 'sun_vend_no_wire');
            if (this.glTypeCode == 2) {
                vendorField.headerName = 'GL Vendor No';
                wireField['hide'] = true;
            } else {
                vendorField.headerName = 'Sun Vendor Check #';
                wireField['hide'] = false;
            }
        });
    }
    public nextPageData = (params) => {
        console.log('params', params);
        let modal: ISearch = {
            filters: [
                {
                    groupId: 0,
                    field: 'full_nm',
                    value: this.searchText || '',
                    Opr: 'like',
                },
                {
                    groupId: 0,
                    field: 'type_flg',
                    value: this.typeFlag,
                },
                {
                    groupId: 0,
                    field: 'trty_or_fac_flg',
                    value: 'B',
                },
            ],
            currentPage: params.currentpage,
            pageSize: this.pageSize,
            sortBy: params && params.sortModel && params.sortModel.length > 0 ? params.sortModel[0].colId : '',
            sortOrder: params && params.sortModel && params.sortModel.length > 0 ? params.sortModel[0].sort : '',
        };

        return this.searchService.getCounterPartySearchResults(modal).pipe(map((resp) => resp.data));
    };
    onSearchTextChange(event) {
        this.searchText = event;
    }
    onRowSelection(selectedRows) {
        this.selectedRow = selectedRows && selectedRows.length > 0 ? selectedRows[0] : undefined;
    }
    onRowDoubleClicked(rowData) {
        this.selectedRow = rowData;
        this.onOKClick();
    }
    onOKClick() {
        if (this.selectedRow) {
            if (this.selectedRow.stop_pymt_flg == 'Y') {
                this.popupService.notify('info', 'This counterparty has been flagged with a warning for the following reason: ' + this.selectedRow.stopPayment);
            } else {
                this.dialogRef.close({ selectedRow: this.selectedRow });
            }
        } else {
            this.popupService.notify('info', 'Please select row.');
        }
    }
    onCancelClick() {
        this.dialogRef.close({ selectedRow: undefined });
    }
}
