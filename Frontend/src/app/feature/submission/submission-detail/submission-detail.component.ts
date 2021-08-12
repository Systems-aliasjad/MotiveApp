import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CommonPopupService } from 'src/app/base/service/common-popup.service';
import { HeaderService } from '../../layout/services/header.service';
import { CounterPartyDetailComponent } from '../counter-party-detail/counter-party-detail.component';
import { CounterPartySearchComponent } from '../counter-party-search/counter-party-search.component';
import { ECounterpartySearchType } from '../models/search.enum';

@Component({
    selector: 'app-submission-detail',
    templateUrl: './submission-detail.component.html',
    styleUrls: ['./submission-detail.component.scss'],
})
export class SubmissionDetailComponent implements OnInit {
    currentTab;
    cedingCompany;
    isCedingCompanyValid;
    cedingProducerBranchKey;
    broker;
    isBrokerValid;
    brokerProducerBranchKey;
    mga;
    isMgaValid;
    mgaProducerBranchKey;
    counterPartySearchType = ECounterpartySearchType;
    detailCedingTitle;
    detailBrokerTitle
    detailMGATitle
    constructor(public dialog: MatDialog, private route: ActivatedRoute, private headerService: HeaderService, private popupService: CommonPopupService) {}

    ngOnInit(): void {

        this.route.queryParams.subscribe((params) => {
            console.log(params);
            let pageTitle = 'Submisison Module';
            if(params && params.id){
              pageTitle = pageTitle + ' - '+params.id;
            }
            this.headerService.setTitle(pageTitle);
        });
    }

    openSearchDialog(searchType, text, title) {
        let searchTitle = title;
        let searchText = text;
        if (!text || text == '') {
            this.popupService.notify('warning', 'Please enter text to search');
            return;
        }
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '1100px';
        dialogConfig.panelClass = 'full-width-dialog';
        dialogConfig.data = {
            typeFlag: searchType,
            searchText: searchText,
            searchTitle: searchTitle,
        };
        const dialogRef = this.dialog.open(CounterPartySearchComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result) => {
            console.log('after dialog close result=', result);
            if (result && result.selectedRow) {
                this.setSelectedRow(result.selectedRow, searchType, true);
            }
        });
    }
    setSelectedRow(row, searchType, isValid) {
        switch (searchType) {
            case ECounterpartySearchType.CedingCompany:
                this.cedingCompany = row && row.full_nm ? row.full_nm : '';
                this.isCedingCompanyValid = isValid;
                this.cedingProducerBranchKey = row.prod_br_key;
                this.detailCedingTitle = 'CedingCompany - ' + this.cedingCompany;
                break;
            case ECounterpartySearchType.Broker:
                this.broker = row && row.full_nm ? row.full_nm : '';
                this.isBrokerValid = isValid;
                this.brokerProducerBranchKey = row.prod_br_key;
                this.detailBrokerTitle = 'Broker - ' + this.broker;
                break;
            case ECounterpartySearchType.MGA:
                this.mga = row && row.full_nm ? row.full_nm : '';
                this.isMgaValid = isValid;
                this.mgaProducerBranchKey = row.prod_br_key;
                this.detailMGATitle = 'MGA - ' + this.mga;
                break;
        }
    }
    openDetail(flag, branchKey, detailTitle) {
        if (flag) {
            const dialogConfig = new MatDialogConfig();
            dialogConfig.autoFocus = true;
            dialogConfig.width = '1100px';
            dialogConfig.panelClass = 'full-width-dialog';
            dialogConfig.data = {
                producerBranchKey: branchKey,
                title: detailTitle,
            };
            const dialogRef = this.dialog.open(CounterPartyDetailComponent, dialogConfig);
            dialogRef.afterClosed().subscribe((result) => {
                console.log('after dialog close result=', result);
            });
        }
    }
}
