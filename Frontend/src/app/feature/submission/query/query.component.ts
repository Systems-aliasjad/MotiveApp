import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { TRCGridComponent } from '../../../base/components/trc-grid/trcgrid.component';
import queryModeColumnDef from '../../../../assets/configs/querymode-columndef.json';
import { Store } from '@ngrx/store';
import * as lookupActions from '../../../shared/store/actions/app.actions';
import { HelperService } from '../../../shared/helper/helper.service';
import { QueryService } from '../services/query.service';
import { forkJoin } from 'rxjs';
import { Input } from '@angular/core';

@Component({
    selector: 'app-query',
    templateUrl: './query.component.html',
    styleUrls: ['./query.component.css'],
})
export class QueryComponent implements OnInit {
    TRCGridQuery: TRCGridComponent;
    @Output() afterGridReady: any = new EventEmitter<any>();
    @ViewChild('TRCGridQuery') set content2(content: TRCGridComponent) {
        if (content) {
            // initially setter gets called with undefined
            this.TRCGridQuery = content;
        }
    }
    @Output() selectedUser = new EventEmitter<any>();
    @Output() userGridReady = new EventEmitter<any>();
    @Output() onEnterPressedQueryMode = new EventEmitter<any>();

    showQueryModeGrid = true;
    selectedRow;
    managerList = [];
    officesList = [];
    colDefQuery = queryModeColumnDef;
    @Input()
    queryModeData = [];
    userData = undefined;
    deleteUNIXId = false;
    deletePrivileges = false;
    refData: any = {};

    isReady = false;

    onRowSelection(): void {}
    onUserDataChanged(): void {}
    onEnterUserMode(): void {}
    onUserGridReady(): void {}
    onEnterQueryMode($event: any): void {}

    constructor(private queryService: QueryService) {}

    private fetchLookups(): void {
        forkJoin([this.queryService.getGroup1(), this.queryService.getGroup2(), this.queryService.getAllUsers()]).subscribe(
            (res) => {
                console.log(res);
                this.setGroup1Lookups(res);
                this.setGroup2Lookups(res);
                this.setGroup3Lookups(res);
            },
            (error) => {},
            () => {
                console.log('fetch completed');
                this.isReady = true;
                this.afterGridReady.emit(true);
            }
        );
    }

    private setGroup3Lookups(res: [any, any, any]): void {
        const lastModifiedByLookup = res[2];
        const contractAnalystLookup = (res[2] as any[]).sort((a, b) => {
            return a.trimFullName.toUpperCase() < b.trimFullName.toUpperCase() ? -1 : 1;
        });

        this.refData.userLookup = lastModifiedByLookup;
        this.refData.contractAnalystId = contractAnalystLookup;
        this.refData.underwriterLookup = (res[2] as any[]).filter((u) => u.secUwFlag === 'Y');

        console.log('this.refData.userLookup:', this.refData.userLookup);
        console.log('this.refData.underwriterLookup:', this.refData.underwriterLookup);
    }

    private setGroup2Lookups(res: [any, any, any]): void {
        this.refData.FinalDispositions = res[1].FinalDispositions;
        this.refData.Layers = res[1].Layers;
        this.refData.RptOffices = res[1].RptOffices;
        this.refData.RptOfficesGrp = (res[1].RptOfficeGroups as any[]).map((rptOffice: any) => {
            if (rptOffice.groupCount > 1) {
                rptOffice.value += ' - ' + rptOffice.groupCount;
            }
            return rptOffice;
        });
        this.refData.Statuses = res[1].Statuses;
        this.refData.SubDepartments = res[1].SubDepartments;
        this.refData.TechAssistant = res[1].TechAssistant;
        this.refData.TreatyTypes = res[1].TreatyTypes;
    }

    private setGroup1Lookups(res: [any, any, any]): void {
        this.refData.Countries = res[0].Countries; //Statuses;
        this.refData.Currencies = (res[0].Currencies as any[]).map((currency: any) => {
            currency.value = currency.currencyIsoCode + ' - ' + currency.value;
            return currency;
        });
        this.refData.LineOfBusinesses = res[0].LineOfBusinesses;
    }

    ngOnInit(): void {
        if (!this.queryModeData || this.queryModeData.length === 0) {
            this.queryModeData = [this.getBlankRow()];
        }
        this.fetchLookups();
    }

    getBlankRow(): any {
        return {
            ReportingOfficeCode: '',
            reportingOfficeGroupCode: '',
            SubmisKey: '',
            TrtyOrFacFlg: '',
            ActionNo: '',
            EffDt: '',
            ContractNmUpper: '',
            SubDeptKey: '',
            BrkrFullNm: '',
            CedingCoFullNm: '',
            UndId: '',
            TrtyTypeCd: '',
            LayerCd: '',
            LobCd: '',
            BaseCurrCd: '',
            ContractAnalystId: '',
            TrtySubmisStatusNo: '',
            TrtySubmisStatusDt: '',
            TrtySubmisActionDt: '',
            TrtySubmisRecvdDt: '',
            TrtySubmisQuoteDt: '',
            QuoteExpirDt: '',
            TouchId: '',
            TouchDt: '',
            ProXolFlg: '',
            FolderNo: '',
            CountryCd: '',
            DocNo: '',
            TaId: '',
            AssignTrtyNo: '',
            OutputEmailAddress: '',
        };
    }

    getGridData(): any {
        this.TRCGridQuery.gridAPI.stopEditing();
        return this.TRCGridQuery.getAllRowNodes('data');
    }
}
