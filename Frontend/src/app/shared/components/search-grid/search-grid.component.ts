import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IGetRowsParams } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { TRCGridComponent } from 'src/app/base/components/trc-grid/trcgrid.component';

@Component({
    selector: 'app-search-grid',
    templateUrl: './search-grid.component.html',
    styleUrls: ['./search-grid.component.scss'],
})
export class SearchGridComponent implements OnInit {
    @Input() rowData;
    @Input() colDef;
    @Input() pageSize;
    @Input() totalPages;
    @Input() searchLabel;
    @Input() searchText;
    @Input() getNextPageData: (value: any) => Observable<any>;
    @Output() searchTextChange = new EventEmitter<any>();
    @Output() selectedRow = new EventEmitter<any>();
    @Output() rowDoubleClicked = new EventEmitter<any>();
    private TRCGrid: TRCGridComponent;
    totalRecords = 0;
    currentChunkSize = 0;
    @ViewChild('TRCGrid') set content(content: TRCGridComponent) {
        if (content) {
            // initially setter gets called with undefined
            this.TRCGrid = content;
        }
    }
    currentPageNo = 0;
    scrollBarDataSource: {
        getRows: (params: IGetRowsParams) => void;
    };

    constructor() {}

    ngOnInit(): void {}

    gridReady(event): void {
        console.log('on grid ready', event);
        this.scrollBarDataSource = {
            getRows: (params: IGetRowsParams) => {
                console.log('on grid ready in getRows', event);

                // if ((this.totalPages > 0 && this.currentPageNo > this.totalPages) || this.totalPages <=0) {
                //   params.successCallback([]);
                //   this.TRCGrid.gridAPI.showNoRowsOverlay();
                //   this.TRCGrid.gridAPI.setInfiniteRowCount(this.totalRecords, true); // remove empty row

                // // if (this.totalPages > 0 && this.currentPageNo > this.totalPages) {
                // //     //  params.successCallback([]);
                // //     // this.TRCGrid.gridAPI.setInfiniteRowCount(this.currentChunkSize, true); // remove empty row
                // } else {
                    this.TRCGrid.gridAPI.showLoadingOverlay();
                    console.log('on grid ready', params);
                    this.currentPageNo = params.startRow / this.pageSize;
                    this.getNextPageData({ currentpage: this.currentPageNo, sortModel: params.sortModel }).subscribe(
                        (resp) => {
                            let data = resp.items;
                            this.totalPages = resp.totalPages;
                            this.currentChunkSize = data.length;
                            this.totalRecords = resp.totalItems;
                            if (data && data.length >0) {
                                if (data.length < this.pageSize) {
                                   this.TRCGrid.gridAPI.setInfiniteRowCount(resp.totalItems, true); // remove empty row
                                }
                                params.successCallback(data);
                                this.TRCGrid.gridAPI.hideOverlay();
                            } else {
                                params.successCallback([]);
                                this.TRCGrid.gridAPI.showNoRowsOverlay();
                                this.TRCGrid.gridAPI.setInfiniteRowCount(this.totalRecords, true); // remove empty row
                            }
                        },
                        (err) => {
                            params.successCallback([]);
                            this.TRCGrid.gridAPI.hideOverlay();
                        }
                    );
              //  }
            },
        };
        if (this.TRCGrid) {
            this.TRCGrid.gridAPI.setDatasource(this.scrollBarDataSource);
        }
    }
    onSearchTextChange() {
        this.searchTextChange.emit(this.searchText);
        this.gridReady(null);
    }
    onRowSelection(selectedRows) {
        this.selectedRow.emit(selectedRows);
    }
    onRowDoubleClicked(event) {
        this.rowDoubleClicked.emit(event.data);
    }
}
