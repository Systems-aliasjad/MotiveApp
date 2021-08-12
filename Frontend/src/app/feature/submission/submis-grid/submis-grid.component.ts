import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IGetRowsParams } from 'ag-grid-community';
import { forkJoin } from 'rxjs';
import { TRCGridComponent } from 'src/app/base/components/trc-grid/trcgrid.component';
import submissionHeader from '../../../../assets/configs/submission-grid-columndef.json';
import { SubmissionService } from '../services/submission.service';

@Component({
    selector: 'app-submis-grid',
    templateUrl: './submis-grid.component.html',
    styleUrls: ['./submis-grid.component.scss'],
})
export class SubmisGridComponent implements OnInit, OnChanges {
    private TRCSubmisGrid: TRCGridComponent;
    @ViewChild('TRCSubmisGrid') set content(content: TRCGridComponent) {
        if (content) {
            // initially setter gets called with undefined
            this.TRCSubmisGrid = content;
        }
    }
    @Input() submissionFilter;
    colDef = submissionHeader;
    submissionData;
    currentPageNo = 0;
    pageSize = 100;
    sortBy = 'ReportingOfficeCode';
    sortOrder = 'asc';
    submissionQuery;
    scrollBarDataSource: {
        getRows: (params: IGetRowsParams) => void;
    };
    totalPages;

    constructor(private router: Router, private submissionService: SubmissionService) {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.submissionFilter) {
            this.gridReady(null);
        }
    }

    ngOnInit(): void {}

    onRowDoubleClicked(event): void {
        console.log('on row double clicked', event);
        this.router.navigate(['/app/submission'], { queryParams: { id: event.data.submis_Key } });
    }

    gridReady(event): void {
        console.log('on grid ready', event);
        this.scrollBarDataSource = {
            getRows: (params: IGetRowsParams) => {
                // if ((this.totalPages > 0 && this.currentPageNo > this.totalPages) || this.totalPages <=0) {
                //     params.successCallback([]);
                //     this.TRCSubmisGrid.gridAPI.showNoRowsOverlay();
                //     this.TRCSubmisGrid.gridAPI.setInfiniteRowCount(0, true); // remove empty row
                // } else {
                    this.TRCSubmisGrid.gridAPI.showLoadingOverlay();
                    console.log('on grid ready', params);
                    console.log('this.totalPages', this.totalPages);
                    this.submissionQuery = {
                        filters: this.submissionFilter,
                        currentPage: params.startRow / this.pageSize, //this.currentPageNo,
                        pageSize: this.pageSize,
                        sortBy: params && params.sortModel && params.sortModel.length > 0 ? params.sortModel[0].colId : '',
                        sortOrder: params && params.sortModel && params.sortModel.length > 0 ? params.sortModel[0].sort : '',
                    };
                    this.bindGridData(params);
              //  }
            },
        };
        if (this.TRCSubmisGrid) {
            this.TRCSubmisGrid.gridAPI.setDatasource(this.scrollBarDataSource);
        }
    }
    bindGridData(params) {
        forkJoin([this.submissionService.getSubmissionData(this.submissionQuery), this.submissionService.getSearchCount(this.submissionQuery)]).subscribe(
            (resp) => {
                console.log('forkjoin resp', resp);

                this.totalPages = resp[1].data.totalPages;

                this.setSubmissionData(params, resp[0], resp[1].data.totalItems);
            },
            (error) => {
                this.TRCSubmisGrid.gridAPI.hideOverlay();
            }
        );
    }
    setSubmissionData(params, resp, totalItems) {
        this.TRCSubmisGrid.gridAPI.hideOverlay();
        this.currentPageNo += 1;
        console.log('response in set submissi', resp);
        if (resp && resp.data && resp.data.items && resp.data.items.length >0) {
            this.submissionData = resp.data.items;
            if (resp.data.items.length < this.pageSize) {
                this.TRCSubmisGrid.gridAPI.setInfiniteRowCount(totalItems, true); // remove empty row
            }
            params.successCallback(resp.data.items);
        } else {
            params.successCallback([]);
            console.log('no round found');
            this.TRCSubmisGrid.gridAPI.showNoRowsOverlay();
            this.TRCSubmisGrid.gridAPI.setInfiniteRowCount(totalItems, true); // remove empty row
        }
    }
}
