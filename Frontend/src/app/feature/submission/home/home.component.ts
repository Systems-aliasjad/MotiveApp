import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import EventEmitter from 'events';
import { HeaderService } from '../../layout/services/header.service';
import { QueryComponent } from '../query/query.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    @ViewChild('query')
    query: QueryComponent;
    queryModeToolbar: any = [];
    queryModeData: any;
    gridMode: GridMode = GridMode.query;
    submissionFilter: any[] = [];
    resultModeToolbar: any = [];
    @Output()
    afterFilterApply: EventEmitter = new EventEmitter();
    searchTitle = 'Search Submission';
    submisisonTitle = 'Submission';
    constructor(private headerService: HeaderService) {}

    afterGridReady($event): void {
        setTimeout(() => {
            console.log('here');
            this.query.TRCGridQuery.keepRowInEditMode(0);
        }, 100);
    }

    ngOnInit(): void {
        this.headerService.setTitle(this.searchTitle);
        this.initQueryModeToolbar();
        this.initResultModeToolbar();
    }

    onSelection(event): void {
        console.log('selectedValue:', event);
    }

    initQueryModeToolbar(): void {
        this.queryModeToolbar = [
            {
                label: 'Add',
                iconUrl: '',
                icon: 'icon-new',
                cssClass: '',
                cssStyle: {},
                listener: ($params) => {
                    this.Add();
                },
            },
            {
                label: 'Delete',
                iconUrl: '',
                icon: 'material-icons',
                iconText: 'delete_outline',
                cssStyle: {},
                listener: ($params) => {
                    this.Delete();
                },
            },
            {
                label: 'Apply',
                iconUrl: '',
                icon: 'icon-Apply_toolbar',
                cssStyle: {},
                listener: ($params) => {
                    this.applySearch();
                },
            },
            {
                label: 'Reset',
                iconUrl: '',
                icon: 'icon-reset_toolar',
                cssStyle: {},
                listener: ($params) => {
                    this.resetQueryMode();
                },
            },
        ];
    }

    initResultModeToolbar(): void {
        this.resultModeToolbar = [
            {
                id: 'Query',
                label: 'Query Mode',
                iconUrl: '',
                icon: 'material-icons',
                iconText: 'search',
                hide: false,
                cssStyle: {},
                listener: ($params) => {
                    this.switchQueryMode();
                },
            },
            {
                label: 'Reset',
                iconUrl: '',
                icon: 'icon-reset_toolar',
                cssStyle: {},
                listener: ($params) => {
                    this.resetQueryMode();
                },
            },
        ];
    }

    applySearch(): void {
        if (this.query) {
            this.generateSubmissionFilter();
            this.gridMode = GridMode.result;
            this.headerService.setTitle(this.submisisonTitle);
        }
    }

    resetQueryMode(): void {
        this.queryModeData = [];
        this.submissionFilter = [];
        this.gridMode = GridMode.query;
        this.headerService.setTitle(this.searchTitle);
        if (this.query && this.query.TRCGridQuery) {
            this.query.TRCGridQuery.rowData = [this.query.getBlankRow()];
        }
    }

    switchQueryMode(): void {
        this.gridMode = GridMode.query;
        this.headerService.setTitle(this.searchTitle);
        if (this.query && this.query.TRCGridQuery) {
            this.query.TRCGridQuery.rowData = this.queryModeData;
        }
        this.submissionFilter = [];
    }

    Add(): void {
        if (this.query) {
            this.query.TRCGridQuery.addRow(this.query.getBlankRow(), 0);
            this.query.TRCGridQuery.keepRowInEditMode(0);
        }
    }

    Delete(): void {
        {
            this.query.TRCGridQuery.deleteRowClient(this.query.TRCGridQuery.gridAPI.getSelectedRows());
        }
    }

    generateSubmissionFilter(): void {
        this.queryModeData = this.query.getGridData();
        for (let index = 0; index < this.queryModeData.length; index++) {
            const row = this.queryModeData[index];
            Object.keys(row).forEach((key) => {
                const field = key;
                const value = row[key];
                const groupId = index;
                if (value && value != '') {
                    this.submissionFilter.push({
                        groupId,
                        field,
                        value,
                    });
                }
            });

            console.log(this.submissionFilter);
        }
        this.afterFilterApply.emit(this.queryModeData);
    }

    public showQueryMode(): boolean {
        return this.gridMode === GridMode.query;
    }
}

enum GridMode {
    query,
    result,
}
