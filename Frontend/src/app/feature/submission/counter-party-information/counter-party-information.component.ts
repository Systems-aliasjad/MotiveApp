import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IFormFieldConfig } from 'src/app/base/components/trc-forms/ITRCFormComponent';
import { TrcFormComponent } from 'src/app/base/components/trc-forms/trc-form/trc-form.component';
import { CounterPartyInformationService } from '../services/counter-party-information.service';

@Component({
    selector: 'app-counter-party-information',
    templateUrl: './counter-party-information.component.html',
    styleUrls: ['./counter-party-information.component.scss'],
})
export class CounterPartyInformationComponent implements OnInit {
    @Input()
    producerBranchKey: number;
    sourceTypes = ['Audit', 'FAC Submission', 'Broker Report', 'News Article', 'Market Intelligence', 'Other'];
    @ViewChild('trcForm')
    trcForm: TrcFormComponent;
    formData: any = {};
    fields: IFormFieldConfig[] = [
        { type: 'input', name: 'producerKey', field: 'producerKey', label: 'Number/Branch:', readOnly: false, colSpan: 4 },
        { type: 'input', name: 'branchNumber', field: 'branchNumber', label: '', readOnly: false, colSpan: 4 },
        { type: 'input', name: 'typeCode', field: 'typeCodeDesc', label: 'Type:', readOnly: true, colSpan: 4 },
        // { type: 'input', name: 'trtyOrFaFlag', field: 'trtyOrFaFlag', label: 'Treaty Or Fac:', readOnly: true, colSpan: 2 }, not required in readonly
        { type: 'input', name: 'fullName', field: 'fullName', label: 'Full Name:', readOnly: true, colSpan: 12 },
        { type: 'input', name: 'properName', field: 'properName', label: 'Proper Name:', readOnly: true, colSpan: 12 },
        { type: 'input', name: 'address1', field: 'address1', label: 'Address:', readOnly: true, colSpan: 4 },
        { type: 'input', name: 'address2', field: 'address2', label: ':', readOnly: true, colSpan: 4 },
        { type: 'input', name: 'address3', field: 'address3', label: '', readOnly: true, colSpan: 4 },
        { type: 'input', name: 'city', field: 'city', label: 'City:', readOnly: true, colSpan: 3 },
        { type: 'input', name: 'state', field: 'state', label: 'State:', readOnly: true, colSpan: 3 },
        { type: 'input', name: 'zipCode', field: 'zipCode', label: 'Zip:', value: '', readOnly: true, colSpan: 3 },
        { type: 'input', name: 'countryName', field: 'countryName', label: 'Country:', readOnly: true, colSpan: 3 },
        { type: 'input', name: 'telephone', field: 'telephone', label: 'Telephone:', value: '', readOnly: true, colSpan: 4 },
        { type: 'input', name: 'email', field: 'email', label: 'Email:', readOnly: true, colSpan: 4 },
        { type: 'input', name: 'webAddress', field: 'webAddress', label: 'Web Address:', readOnly: true, colSpan: 4 },
        { type: 'input', name: 'prodComments', field: 'prodComments', label: 'Corporate Comments:', readOnly: true, colSpan: 12 },
        { type: 'input', name: 'comments', field: 'comments', label: 'Branch Comments:', readOnly: true, colSpan: 12 },
        { type: 'checkbox', name: 'agrStdrdClsFlag', field: 'agrStdrdClsFlag', label: 'Agreed Standard Clauses', readOnly: true, colSpan: 12 },
        { type: 'checkbox', name: 'confAgrFlag', field: 'confAgrFlag', label: 'Confidentiality Agreement', readOnly: true, colSpan: 12 },
        { type: 'checkbox', name: 'genTrdAgrFlag', field: 'genTrdAgrFlag', label: 'General Trading Agreement', readOnly: true, colSpan: 12 },
        { type: 'checkbox', name: 'mstrFacCertFlag', field: 'mstrFacCertFlag', label: 'Master Fac Terms & Conditions', readOnly: true, colSpan: 12 },
        { type: 'checkbox', name: 'mstrSecFundFlag', field: 'mstrSecFundFlag', label: 'Master Security/Funding Agreement:', readOnly: true, colSpan: 12 },
        { type: 'input', name: 'macolaVendorNo', field: 'macolaVendorNo', label: 'Sun Vendor Check/ ACH #:', readOnly: true, colSpan: 6 },
        { type: 'input', name: 'sunVendNoWire', field: 'sunVendNoWire', label: 'Wire #:', readOnly: true, colSpan: 6 },
        { type: 'input', name: 'statusFlag', field: 'statusFlag', label: 'Status Code:', readOnly: true, colSpan: 6 },
        { type: 'input', name: 'naicNumber', field: 'naicNumber', label: 'NAIC No:', readOnly: true, colSpan: 6 },
        { type: 'input', name: 'parentKey', field: 'parentKey', label: 'Group Number:', readOnly: true, colSpan: 6 },
        { type: 'input', name: 'authFlag', field: 'authFlag', label: 'Authorized:', readOnly: true, colSpan: 6 },
        { type: 'input', name: 'aigFlag', field: 'aigFlag', label: 'Affiliated:', readOnly: true, colSpan: 6 },
        { type: 'input', name: 'taxId', field: 'taxId', label: 'Fed Tax/Alien ID #:', readOnly: true, colSpan: 6 },
        { type: 'input', name: 'usFlag', field: 'usFlag', label: 'US Business:', readOnly: true, colSpan: 6 },
        { type: 'input', name: 'priorityCode', field: 'priorityCodeDesc', label: 'Priority:', readOnly: true, colSpan: 6 },
        { type: 'input', name: 'umrBrkrCode', field: 'umrBrkrCode', label: 'UMR:', readOnly: true, colSpan: 6 },
        { type: 'input', name: 'stopPaymentCode', field: 'StopPaymnetDesc', label: 'Producer Warning', readOnly: true, colSpan: 6 },
        { type: 'input', name: 'brkrPseudonym', field: 'brkrPseudonym', label: 'Pseudonym:', readOnly: true, colSpan: 6 },
        { type: 'checkbox', name: 'headquartersFlag', field: 'headquartersFlag', label: 'Headquarters For Schedule F:', readOnly: true, colSpan: 6 },
        { type: 'checkbox', name: 'nyidCertifiedFlag', field: 'nyidCertifiedFlag', label: 'NYID Certified:', readOnly: true, colSpan: 6 },
        { type: 'date', name: 'touchDate', field: 'touchDate', label: 'Update Date:', readOnly: true, colSpan: 6 },
        { type: 'input', name: 'touchId', field: 'modifiedBy', label: 'Updated By:', readOnly: true, colSpan: 6 },
        { type: 'date', name: 'createDate', field: 'createDate', label: 'Created Date:', readOnly: true, colSpan: 6 },
        { type: 'input', name: 'currentOfTotal', field: 'currentOfTotal', label: 'Current Record No of Total Count:', value: '1 Of 1', readOnly: true, colSpan: 6 },
        { type: 'input', name: 'reqRptOfficeCode', field: 'reqRptOfficeCode', label: 'Requesting Office:', readOnly: true, colSpan: 6 },
        { type: 'checkbox', name: 'qabFlag', field: 'qabFlag', label: 'Quoted, Authorized or Bound:', readOnly: true, colSpan: 6 },
        { type: 'input', name: 'qabWithContingencyFlag', field: 'qabWithContingencyFlag', label: '', readOnly: true, colSpan: 6 },
    ];
    formLoaded: boolean;
    constructor(private counterPartyInformationService: CounterPartyInformationService) {}

    ngOnInit(): void {
        this.counterPartyInformationService.getCounterPartyDetails(this.producerBranchKey).subscribe((res) => {
            console.log('countereParty:', res);
            // res.data.createDate = res.data.createDate ? new Date(res.data.createDate).toLocaleString() : '';
            // res.data.touchDate = res.data.touchDate ? new Date(res.data.touchDate).toLocaleString() : '';
            res.data.agrStdrdClsFlag = (res.data.agrStdrdClsFlag as string).toLowerCase() === 'y' ? true : false;
            res.data.confAgrFlag = (res.data.confAgrFlag as string).toLowerCase() === 'y' ? true : false;
            res.data.genTrdAgrFlag = (res.data.genTrdAgrFlag as string).toLowerCase() === 'y' ? true : false;
            res.data.mstrFacCertFlag = (res.data.mstrFacCertFlag as string).toLowerCase() === 'y' ? true : false;
            res.data.mstrSecFundFlag = (res.data.mstrSecFundFlag as string).toLowerCase() === 'y' ? true : false;
            res.data.statusFlag = (res.data.statusFlag as string).toLowerCase() === 'i' ? 'Inactive' : 'Active';
            res.data.authFlag = (res.data.authFlag as string).toLowerCase() === 'y' ? 'Yes' : 'No';
            res.data.aigFlag = (res.data.aigFlag as string).toLowerCase() === 'y' ? 'Yes' : 'No';
            res.data.usFlag = (res.data.usFlag as string).toLowerCase() === 'y' ? 'Yes' : 'No';
            res.data.qabWithContingencyFlag = res.data.qabWithContingencyFlag
                ? (res.data.qabWithContingencyFlag as string).toLowerCase() === 'y'
                    ? 'With Contingency'
                    : 'Without Contingency'
                : 'Without Contingency';
            res.data.nyidCertifiedFlag = (res.data.nyidCertifiedFlag as string).toLowerCase() === 'y' ? true : false;
            res.data.headquartersFlag = (res.data.headquartersFlag as string).toLowerCase() === 'y' ? true : false;
            res.data.qabFlag = res.data.qabFlag ? ((res.data.qabFlag as string).toLowerCase().trim() === '' ? false : true) : false;

            this.formData = { data: res.data };
            this.formLoaded = true;
        });
    }

    submit($event): void {
        console.log($event);
    }
}
