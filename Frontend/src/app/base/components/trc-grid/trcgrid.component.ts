import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscription, of, pipe } from 'rxjs';
import { GridOptions, IGetRowsParams, ColumnApi, RowNode } from 'ag-grid-community';
import { IValueFormatterParams } from '../../formatters/IValueFormatterParams';
import { TRCGridFrameworkComponents } from './trcgrid-framework-components';
import { CommonPopupService } from '../../service/common-popup.service';
import { Store } from '@ngrx/store';
import { ValueFormattingService } from '../../formatters/value-formatting.service';
import { ValidationUtil } from '../../validators/ValidationUtil';
import { map } from 'rxjs/operators';

@Component({
    selector: 'trc-grid',
    templateUrl: './trcgrid.component.html',
    styleUrls: ['./trcgrid.component.css'],
})
export class TRCGridComponent implements OnInit, OnChanges {
    @Input() isReady = false;
    @Input() serviceUrl: string = '';
    @Input() serviceObjName: string = ''; // this name is required if get call returns object instead of array
    @Input() editType: string = '';
    @Input() globalFilter: string = '';
    @Input() rowModelType: string = '';
    @Input() rowData: any = [{}];
    @Input() lookupData: any = [{}];
    @Input() columnDefs: any = [];
    @Input() enabledPagination: boolean = false;
    @Input() enabledInfiniteScrolling: boolean = false;
    @Input() paginationAutoPageSize: boolean = false;
    @Input() rowDeselection: boolean = false;
    @Input() enableSorting: boolean = true;
    @Input() suppressRowClickSelection: boolean = false;
    @Input() suppressCellSelection: boolean = true;

    @Input() enableServerSideFilter: boolean = false;
    @Input() enableServerSideSorting: boolean = false;
    @Input() stopEditingWhenGridLosesFocus: boolean = false;
    @Input() showGlobalSearch: boolean = false;
    @Input() showExportButton: boolean = false;
    @Input() pagination: boolean = false;
    @Input() fullRowEdit: boolean = true;
    @Input() editable: boolean = false;
    @Input() pageSize: number = 0;
    @Input() gridOptions: GridOptions;
    @Input() secondaryGridOptionsParam: any;
    @Input() gridParamters: any;
    @Input() headerHeight: any;
    @Input() agGridRowHeight: number = 37;
    @Input() pinnedBottomRowData: any;
    @Input() getContextMenuItems: any = undefined;
    @Input() gridParent: any;
    @Input() rowSelection = 'single';
    @Input() defaultColDef: any;
    @Input() hideToolbar: boolean = false;
    @Input() columnDefsInternal: any = [];
    @Input() beforeCreate: (value: any) => any;
    @Input() beforeUpdate: (value: any) => any;
    @Input() beforeDelete: (value: any) => any;
    @Input() beforeCellValueChange: (value: any) => any;
    @Input() overrideColumnDefiniation: (value: any) => any;
    @Input() suppressColumnVirtualisation: boolean = false;
    @Input() refData: any = {};
    @Input() showDefaultErrNotification = true;
    @Input() minColumnWidth: number = 200;
    @Input() suppressSuccessNotification: boolean = false;
    @Input() updateSuccessNotificationMessage: string = 'Record has been successfully updated.';
    @Input() updateConfirmationMessage: string = 'Do you want to update changes?';
    @Input() updateCancelButtonText: string = 'Cancel';
    @Input() updateConfirmButtonText: string = 'Update';
    @Input() deleteConfirmMessage: string = 'This row will be permanently deleted.';
    @Input() deleteSuccessMessage: string = 'Row ({tag}) has been successfully deleted. ';
    @Input() deleteConfirmButtonText: string = 'Delete';
    @Input() deleteCancelButtonText: string = 'Cancel ';
    @Input() invalidDataMessage: string = 'Grid has some invalid data, do you want to discard changes?';
    @Input() confirmButtonText: string = 'Confirm';
    @Input() cancelButtonText: string = 'Cancel';
    @Input() deletePopupIcon: string = 'delete_forever';
    @Input() updatePopupIcon: string = 'Cancel';
    @Input() validationPopupIcon: string = 'Cancel';
    @Input() scrollBarDataSource: any;
    // Output Eventse
    @Output() onDataReady: EventEmitter<any> = new EventEmitter();
    @Output() onSelectionChanged2: EventEmitter<any> = new EventEmitter();
    @Output() beforeSubmit: EventEmitter<any> = new EventEmitter();
    @Output() afterSubmit: EventEmitter<any> = new EventEmitter();
    @Output() onGridReady: EventEmitter<any> = new EventEmitter();
    @Output() onGridModelUpdated: EventEmitter<any> = new EventEmitter();
    @Output() onNewColumnsLoaded: EventEmitter<any> = new EventEmitter();
    @Output() selectEditorValueChange: EventEmitter<any> = new EventEmitter();
    @Output() agGridRowSelected: any = new EventEmitter<any>();
    @Output() rowEditComplete: any = new EventEmitter<any>();
    @Output() gridReadyComplete: any = new EventEmitter<any>();
    @Output() rowDataChanged: any = new EventEmitter<any>();
    @Output() newColumnsLoaded: any = new EventEmitter<any>();
    @Output() onRowCreated: any = new EventEmitter<any>();
    @Output() onUndoChanges: any = new EventEmitter<any>();
    @Output() afterCreate: any = new EventEmitter<any>();
    @Output() afterUpdate: any = new EventEmitter<any>();
    @Output() afterDelete: any = new EventEmitter<any>();
    @Output() rowEditingStopped: any = new EventEmitter<any>();
    @Output() onCellValueChanged: any = new EventEmitter<any>();
    @Output() onKeyPress: any = new EventEmitter<any>();
    @Output() onEnter: any = new EventEmitter<any>();
    @Output() rowDoubleClicked = new EventEmitter<any>();
    @Output() rowChanged = new EventEmitter<any>();
    // End Output Events

    gridColumnApi: ColumnApi;
    components: {};
    rowBuffer: number;
    paginationPageSize: number;
    cacheOverflowSize: number;
    maxConcurrentDatasourceRequests: number;
    infiniteInitialRowCount: number;
    maxBlocksInCache: number;
    cacheBlockSize: number;
    overlayLoadingTemplate: any;
    gridOverlayComponentParams: { loadingMessage: string };
    getRowStyle: any;
    frameworkComponents: {};
    isRowInEditMode = false;

    testRowData: [{}];
    private currentPageNo: number = 1;
    public gridAPI: any;

    private newRowNode: any = null;
    private edtingRowIndex: number = -1;
    trcGridSubscription: Subscription;
    rowDataList: any;
    rowDataError: any;
    defaultBlankRow = {};
    deletePopupConfig = {};
    updatePopupConfig = {};
    constructor(private valueFormatterService: ValueFormattingService, private httpClient: HttpClient, private popupService: CommonPopupService, private store: Store<any>) {}
    ngOnInit() {
        this.deletePopupConfig = {
            confirmButtonText: this.deleteConfirmButtonText,
            cancelButtonText: this.deleteCancelButtonText,
            icon: 'delete_forever',
        };
        this.updatePopupConfig = {
            confirmButtonText: this.updateConfirmButtonText,
            cancelButtonText: this.updateCancelButtonText,
            icon: 'edit',
        };

        console.log('***TRCGrid Initialized*****', new Date());
        this.init();
        this.setupInfiniteScrolling();
        this.setupColumnDefination(this.columnDefs).subscribe((columnDef: Array<any>) => {
            this.columnDefsInternal = columnDef;
            this.setupInfiniteScrolling();
            this.setupValidationAndFormatting(this.columnDefsInternal);
            columnDef.forEach((col) => {
                if (col && col.field) {
                    this.defaultBlankRow[col.field] = col.defaultKey || null;
                }
                if(col && !col.width && !col.minWidth ){
                  col.minWidth = this.minColumnWidth;
                }
            });
            // console.log('this.defaultBlankRow ', this.defaultBlankRow);
        });
    }
    private init() {
        this.frameworkComponents = TRCGridFrameworkComponents;
        // this.gridOverlayComponentParams = { loadingMessage: 'One moment please...' };
        // this.overlayLoadingTemplate = '<span class="ag-overlay-loading-center">Please wait while your data is loading...</span>';
        if (this.editable) {
            this.defaultColDef = {
                editable: true,
                sortable: true,
                // minWidth: this.minColumnWidth,
                filter: true,
                resizable: true,
                tooltipComponent: 'GridTooltipComponent',
                tooltipShowDelay: 0,
                tooltipValueGetter: function (params) {
                    return { value: params.value };
                },
                tooltipComponentParams: {
                    invalid: false,
                },
            };
            if (this.fullRowEdit) {
                this.editType = 'fullRow';
            }
        }
    }

    private selectRowDataFromStore(): Observable<any> {
        return this.store.select('trcGridReducer').pipe(
            map((res) => {
                return res.rowDataResults;
            })
        );
    }
    private setupRowData(serviceUrl: string) {
        if (!serviceUrl || serviceUrl.length == 0) return;
        if (this.enabledInfiniteScrolling) {
            this.gridAPI.setDatasource(this.scrollBarDataSource);
        } else {
            this.httpClient.get(serviceUrl).subscribe((res: any) => {
                if (this.serviceObjName && this.serviceObjName != '') {
                    this.rowData = res ? res[this.serviceObjName] : [];
                } else {
                    this.rowData = res;
                }
            });
            // this.selectRowDataFromStore().subscribe((rowData: any) => {
            //     this.rowData = rowData;
            // });
        }
    }
    private executeBeforeCreate(rowNode: any): any {
        let payLoad = rowNode ? rowNode.data : {};
        if (this.beforeCreate) {
            payLoad = this.beforeCreate(this.newRowNode);
        }
        return payLoad;
    }

    /**
     * Takes columnDefs as Url or Array object.
     * @param columnDefs
     */
    private setupColumnDefination(columnDefs: any): Observable<any> {
        // debugger;
        if (typeof columnDefs === 'string') {
            return this.httpClient.get(columnDefs);
        }
        return of(columnDefs); //this.columnDefs;
    }

    /**
     * This Method is called once column defination is loaded and setup validation and formatting.
     * @param columDef
     */
    private setupValidationAndFormatting(columDef: Array<any>) {
        columDef.map((col: any) => {
            // col.cellRenderer = 'ValueCellRendererComponent',
            if (col.keyField) {
                col.hide = true;
            }
            if (this.editable) {
                if (!col.cellEditor) {
                    if (col.controlConfig && col.controlConfig.controlName) {
                        col.cellEditor = col.controlConfig.controlName;
                    } else {
                        col.cellEditor = 'TextboxEditorComponent';
                    }
                }
                col.cellEditorParams = col.cellEditorParams || { values: [] };
                if (col.refDataKey && this.refData[col.refDataKey]) {
                    col.cellEditorParams.values = this.refData[col.refDataKey];
                }
                const data = col.cellEditorParams.values;
                const nv = col.nameValue || { name: 'value', value: 'key' };
                if (data && data.length > 0) {
                    if (!col.multiColumn) {
                        col.cellEditorParams.values = data.map((i) => {
                            let val: any = {
                                name: i[nv.name],
                                value: i[nv.value],
                            };
                            if (col.parentField) {
                                val.parentField = i[col.parentField];
                            }
                            return val;
                        });
                    }
                }
            }

            if (col.valueFormatters && col.valueFormatters.length > 0) {
                col.valueFormatter = (params) => {
                    let value = params.value;
                    col.valueFormatters.forEach((formatter: IValueFormatterParams) => {
                        formatter.params = formatter.params || {};
                        formatter.params.params = params;
                        value = this.valueFormatterService.format(value, formatter);
                    });
                    return value;
                };
            }
        });
    }

    /**
     * Init the RowData and GridOption on GridReady event.
     * @param params
     */
    public initRowDataOnGridReady(params: GridOptions) {
        this.initGridOptions(params);
        this.setupRowData(this.serviceUrl);
        this.onGridReady.emit(params);
        console.log('***TRCGrid Ready*****', new Date());
        //this.loadDataFromRequestUrl(this.requestUrl);
    }
    /**
     * This Method sets gridOptions, GridAPI and TRCContext for Customization.
     * @param params GridOptions params when GridReady event is fired.
     */
    private initGridOptions(params: GridOptions): void {
        this.gridOptions = params;
        this.gridAPI = params.api;
        this.gridAPI.context.invalidRows = [];
        this.gridAPI.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
        this.gridAPI.TRCContext = {
            invalidRows: [],
            modifiedRows: [],
            events: {
                onCellFocusOut: null,
            },
        };

        //this.gridAPI.setDomLayout("autoHeight");
    }

    ngOnChanges() {}

    /**
     * Setup configuration for Infinite Scrolling.
     */
    private setupInfiniteScrolling(): void {
        if (!this.enabledInfiniteScrolling) return;

        this.rowBuffer = 0;
        this.rowModelType = 'infinite';
        //this.paginationPageSize = 10;
        //this.cacheOverflowSize = 2;
        //this.maxConcurrentDatasourceRequests = 1;
        this.paginationAutoPageSize = false;
        //this.infiniteInitialRowCount = 1000;
        //this.maxBlocksInCache = 2;
        //this.cacheBlockSize = 10;
        //this.pagination = false;

        // this.rowData = [];
        this.rowBuffer = 0;
        this.paginationPageSize = this.pageSize;
        this.cacheBlockSize = this.pageSize;
        this.cacheOverflowSize = 2;
        this.maxConcurrentDatasourceRequests = 1;
        this.infiniteInitialRowCount = 1;
        this.rowData = undefined;

        if (this.serviceUrl) {
            this.scrollBarDataSource = {
                getRows: (params: IGetRowsParams) => {
                    let query = `currentPage=${this.currentPageNo - 1}`;
                    //TODO: Munazzah changed the param name temporarily
                    // query += this.pageSize > 0 ? `&pageSize=${this.pageSize}` : '';

                    query += this.pageSize > 0 ? `&pageSize=${this.pageSize}` : '';
                    const url = this.serviceUrl + (this.serviceUrl.indexOf('?') != -1 ? '&' : '?') + query;
                    this.gridAPI.showLoadingOverlay();
                    this.httpClient.get(url).subscribe(
                        (res: any) => {
                            this.gridAPI.hideOverlay();
                            this.currentPageNo += 1;
                            /// let rows = res.slice(params.startRow, 10)
                            let data = [];
                            if (this.serviceObjName && this.serviceObjName != '') {
                                data = res[this.serviceObjName];
                            } else {
                                data = res;
                            }

                            this.rowData.push(data);
                            params.successCallback(data);
                        },
                        (error) => {
                            this.gridAPI.hideOverlay();
                            this.currentPageNo -= 1;
                        }
                    );
                    //console.log('asking for ' + params.startRow + ' to ' + params.endRow);
                },
            };
        }
    }

    private get getInvalidRows(): Array<any> {
        return this.gridAPI.TRCContext.invalidRows || [];
    }
    private set setInvalidRows(invalidRows: Array<any>) {
        this.gridAPI.TRCContext.invalidRows = invalidRows;
    }
    private get isModified(): boolean {
        return this.getModifiedRows.length > 0;
    }
    private get isInvalid(): boolean {
        return this.getInvalidRows.length > 0;
    }
    private get getModifiedRows(): Array<any> {
        return this.gridAPI.TRCContext.modifiedRows || [];
    }
    private set setModifiedRows(modifiedRows: Array<any>) {
        this.gridAPI.TRCContext.modifiedRows = modifiedRows;
    }

    private checkInvalidRows(): boolean {
        if (this.getInvalidRows.length > 0) {
            const MESSAGE: string = 'Unable to save invalid data, do you want to revert changes?';
            this.popupService.confirmBox(MESSAGE, ($event) => {
                if ($event.confirm) {
                    if (this.newRowNode) {
                        this.deleteRowClient([this.newRowNode.data]);
                        // this.getInvalidRows.forEach(item => {
                        //     if (item.rowIndex != this.newRowNode) {
                        //         let rowNode = this.gridAPI.getDisplayedRowAtIndex(item.rowIndex);
                        //         rowNode.setDataValue(item.colId, item.oldValue);
                        //     }
                        // });
                        this.setInvalidRows = [];
                        // this.setModifiedRows = [];
                        this.newRowNode = null;
                        this.gridAPI.redrawRows();
                    }

                    return true;
                }
            });
        }
        return false;
    }

    private confirmBox(message: string, callback: Function) {
        this.popupService.confirmBox(message, callback);
    }
    private deleteNewRow() {
        if (this.newRowNode) {
            this.setInvalidRows =
                this.gridAPI.TRCContext.invalidRows.filter((el) => {
                    return el.rowIndex != this.newRowNode.rowIndex;
                }) || [];
            this.setModifiedRows =
                this.gridAPI.TRCContext.modifiedRows.filter((el) => {
                    return el.rowIndex != this.newRowNode.rowIndex;
                }) || [];
            this.deleteRowClient([this.newRowNode.data]);
            this.newRowNode = null;
        }
    }
    public keepRowInEditMode(rowIndex) {
        let visibleCols = this.columnDefsInternal.filter((x) => x.hide != true);
        let col = visibleCols[0].field; //this.columnDefsInternal[2].field;
        this.gridAPI.setFocusedCell(0, col);
        this.gridAPI.ensureColumnVisible(col);
        this.gridAPI.ensureIndexVisible(0);

        this.gridAPI.startEditingCell({
            rowIndex: rowIndex, // newly added row is on top
            colKey: col,
        });
    }
    private saveCreatedRows(): void {
        if (!this.newRowNode) return;
        console.log('in add ', this.newRowNode);
        if (this.isInvalid) {
            this.confirmBox(this.invalidDataMessage, ($event) => {
                if ($event.confirm) {
                    this.deleteNewRow();
                    //   this.isRowInEditMode = false;
                } else {
                    //MA: keep the row in edit mode if it has invalid data
                    this.keepRowInEditMode(0);
                }
            });
        } else {
            //MA: Get url without query params

            if (this.serviceUrl && this.serviceUrl.length > 0) {
                this.postRequest(this.geturlWithoutQueryParam(), this.newRowNode);
            } else {
                console.log('before sending add row', this.gridAPI.getModifiedRows);
                this.rowDataChanged.emit({
                    mode: 'add',
                    data: this.newRowNode.data,
                    rowIndex: 0,
                });
            }
        }
    }

    private onPostRequest(response: any): void {
        this.popupService.notify('success', 'Row has been successfully created.');
        this.newRowNode = null;
        this.gridAPI.forEachNode((item: any) => {
            if (item.isNewRow) {
                item.isNewRow = false;
                item.isEdited = false;
            }
        });
        this.onRowCreated.emit(response);
    }
    private onRequestError(err: any): void {
        if (this.showDefaultErrNotification) {
            this.popupService.notify('error', 'Something went wrong!');
        }
    }
    private postRequest(url, rowNode) {
        if (Object.keys(rowNode).length === 0 && rowNode.constructor === Object) {
            return;
        }
        let payload = this.executeBeforeCreate(rowNode);
        if (payload) {
            this.httpClient.post(url, payload).subscribe(
                (res) => {
                    this.onPostRequest(res);
                    this.afterCreate.emit({ request: payload, response: res });
                    this.gridAPI.TRCContext.modifiedRows = [];
                    this.newRowNode = null;
                    // this.isRowInEditMode = false;
                },
                (err) => {
                    this.onRequestError(err);
                    this.keepRowInEditMode(0);
                    this.afterCreate.emit({ request: payload, response: err });
                }
            );
        }
    }

    private getKeyField(rowIndex) {
        if (this.columnDefsInternal && this.columnDefsInternal[0].keyField) {
            const keyField = this.gridAPI.getDisplayedRowAtIndex(rowIndex).data[this.columnDefsInternal[0].keyField];
            // if (!keyField) throw `could not found this keyField: '${this.columnDefsInternal[0].keyField}' in column defination or value is null of this feild in row data.`;
            return keyField;
        } else {
            console.error('keyField is not defiend in column defination. Please create the first colum in column defination ex. {keyField:"MyKeyField"}');
            return null;
        }
    }

    private undoInvalidChanges(): boolean {
        const invalidRows: Array<any> = this.gridAPI.TRCContext.invalidRows;

        if (invalidRows.length > 0) {
            this.popupService.confirmBox('Grid has some invalid data, do you want to revert changes?', ($event) => {
                if ($event.confirm) {
                    /// code commented it was for multiple row update
                    invalidRows.forEach((item) => {
                        let rowNode = this.gridAPI.getDisplayedRowAtIndex(item.rowIndex);
                        rowNode.data[item.colId] = item.oldValue;
                    });
                    this.popupService.notify('success', 'Data has been reset.');
                    // this.gridAPI.TRCContext.invalidRows = [];
                    //this.gridAPI.redrawRows();
                } else {
                    //MA: keep the row in edit mode if it has invalid data
                    // this.gridAPI.TRCContext.invalidRows = [];
                    // this.gridAPI.redrawRows();
                    this.keepRowInEditMode(this.getModifiedRows[0].rowIndex);
                }
            });
            return true;
        }
        return false;
    }
    private geturlWithoutQueryParam() {
        let url = this.serviceUrl.substring(0, this.serviceUrl.indexOf('?') != -1 ? this.serviceUrl.indexOf('?') : this.serviceUrl.length);
        return url;
    }
    private saveModifiedRows(): void {
        console.log('in save modified rows');
        if (!this.isModified) return;
        const modifiedRows: Array<any> = this.getModifiedRows;
        const invalidRows: Array<any> = this.getInvalidRows;

        if (this.undoInvalidChanges()) {
            return;
        }
        if (!modifiedRows || modifiedRows.length == 0) {
            this.popupService.notify('info', 'No changes for update.');
            return;
        }

        modifiedRows.forEach((modifiedRow) => {
            if (!invalidRows.find((i) => i.rowIndex == modifiedRow.rowIndex)) {
                let o = {};
                //MA: to get full row for update
                if (this.fullRowEdit) {
                    let fullRow = this.gridAPI.getRowNode(modifiedRow.rowIndex);
                    let fullRowData = fullRow.data;
                    o = fullRowData;
                }
                let oldData = {};
                //TODO: temporarily commented need to veirfy it again
                // modifiedRow.colIds.forEach((modifiedCell) => {
                //     oldData[modifiedCell.colId] = modifiedCell.oldValue;
                //     o[modifiedCell.colId] = modifiedCell.value;
                // });
                console.log('modifiedRow=', modifiedRow);
                console.log('in modified rows payload=', o);
                if (!this.serviceUrl || this.serviceUrl.length <= 0) {
                    this.rowDataChanged.emit({
                        mode: 'update',
                        oldData: oldData,
                        data: o,
                        rowIndex: modifiedRow.rowIndex,
                    });
                    return;
                }

                const key = this.getKeyField(modifiedRow.rowIndex);
                if (!key) return;

                let url = `${this.geturlWithoutQueryParam()}/${key}`;

                let data: any = [];

                if (this.beforeUpdate) {
                    o = this.beforeUpdate({ data: o, oldData: oldData });
                }
                this.popupService.confirmBox(
                    this.updateConfirmationMessage,
                    ($event) => {
                        if ($event.confirm) {
                            this.httpClient.put(url, o).subscribe(
                                (res) => {
                                    if (!this.suppressSuccessNotification) {
                                        this.popupService.notify('success', this.updateSuccessNotificationMessage);
                                    }

                                    this.gridAPI.TRCContext.modifiedRows = [];
                                    this.afterUpdate.emit({ request: o, response: res });
                                    // this.isRowInEditMode = false;
                                },
                                (err) => {
                                    this.keepRowInEditMode(modifiedRow.rowIndex);
                                    this.afterUpdate.emit({ request: o, response: err });
                                }
                            );
                        } else {
                            this.undoChanges();
                            // this.isRowInEditMode = false;
                            //TODO: Check this condition
                            //this.keepRowInEditMode(modifiedRow.rowIndex);
                        }
                    },
                    this.updatePopupConfig
                );
            } else {
                this.popupService.notify('info', 'No changes for update.');
            }
        });
    }

    onSelectionChanged(event) {
        //MA: emit this selected row;
        this.agGridRowSelected.emit(this.gridAPI.getSelectedRows());
    }
    public deleteRowClient(trans: any) {
        if (!trans) {
            console.error('Invalid transaction or data object is not present is rowNode.');
            return;
        }
        this.gridAPI.applyTransaction({ remove: trans });
        //this.gridAPI.redrawRows();
        //this.gridAPI.refreshCells();
    }

    private undoInvalidRowsOnly() {
        let changesReverted = false;
        this.getInvalidRows.forEach((item) => {
            let rowNode = this.gridAPI.getDisplayedRowAtIndex(item.rowIndex);
            rowNode.data[item.colId] = item.oldValue;
            changesReverted = true;
        });
        return changesReverted;
    }

    private undoNewRow() {
        if (this.newRowNode) {
            this.deleteRowClient([this.newRowNode.data]);
        }
    }
    private undoModifiedRows() {
        this.gridAPI.TRCContext.modifiedRows.forEach((item) => {
            let rowNode = this.gridAPI.getDisplayedRowAtIndex(item.rowIndex);
            item.colIds.forEach((cell) => {
                rowNode.data[cell.colId] = cell.oldValue;
                //rowNode.setDataValue(cell.colId, cell.oldValue);
            });
        });
        this.gridAPI.TRCContext.modifiedRows = [];
    }
    private undoInvalidData() {
        let undo: boolean = false;
        this.getInvalidRows.forEach((item) => {
            let rowNode = this.gridAPI.getDisplayedRowAtIndex(item.rowIndex);
            rowNode.setDataValue(item.colId, item.oldValue);
            this.setInvalidRows = [];
            undo = true;
        });
        return undo;
    }
    private undoAllCurrentChanges() {
        this.undoNewRow();
        this.undoModifiedRows();
        this.setInvalidRows = [];
        return true;
        //  return this.undoInvalidData();
    }

    /**
     * use output cellValueChanged if you want to override
     * default implementation.
     * This method cache each value changed in a cell.
     * @param $event
     */
    onCellValueChangedInternal($event) {
        if (this.onCellValueChanged.observers.length > 0) {
            this.onCellValueChanged.emit($event);
            return;
        }
        if (this.beforeCellValueChange) {
            $event = this.beforeCellValueChange($event);
        }

        if ($event.value != $event.oldValue) {
            if (!$event.value && !$event.oldValue) {
            } else {
                this.cacheModifiedRows($event);
            }
        }
        // if ($event.value == $event.oldValue && !this.isModified) {
        // } else if ($event.value == $event.oldValue && this.isModified) {
        //     // this.removeModifiedRowFromCache($event.rowIndex);
        // } else {
        //     this.cacheModifiedRows($event);
        //     // this.checkInvlidColumn($event,column)
        // }
    }

    private cacheModifiedRows($valueChangeEvent) {
        let rowFound = this.getModifiedRows.find((i) => i.rowIndex === $valueChangeEvent.rowIndex);
        if (!rowFound) {
            ///this line stores orignalValue in data.
            $valueChangeEvent.data['oldValue'] = $valueChangeEvent.oldValue;

            this.gridAPI.TRCContext.modifiedRows.push({
                event: $valueChangeEvent,
                rowIndex: $valueChangeEvent.rowIndex,
                colIds: [
                    {
                        colId: $valueChangeEvent.column.colId,
                        prvValue: $valueChangeEvent.oldValue,
                        oldValue: $valueChangeEvent.data['oldValue'] || $valueChangeEvent.oldValue,
                        // value: $valueChangeEvent.value
                        value: $valueChangeEvent.data[$valueChangeEvent.column.colId],
                    },
                ],
            });
        } else {
            rowFound.event = $valueChangeEvent;
            const colIdFound = rowFound.colIds.find((j) => j.colId === $valueChangeEvent.column.colId);
            if (!colIdFound) {
                rowFound.colIds.push({
                    colId: $valueChangeEvent.column.colId,
                    prvValue: $valueChangeEvent.oldValue,
                    oldValue: $valueChangeEvent.data['oldValue'] || $valueChangeEvent.oldValue,
                    value: $valueChangeEvent.data[$valueChangeEvent.column.colId],
                });
            } else {
                // colIdFound.value = $valueChangeEvent.value;
                colIdFound.colId = $valueChangeEvent.column.colId;
                colIdFound.value = $valueChangeEvent.data[$valueChangeEvent.column.colId];
                (colIdFound.prvValue = $valueChangeEvent.oldValue), (colIdFound.oldValue = $valueChangeEvent.data['oldValue'] || $valueChangeEvent.oldValue);
            }
        }
    }

    private removeModifiedRowFromCache(rowIndex) {
        const rowFound = this.getModifiedRows.findIndex((i) => i.rowIndex == rowIndex) != -1;
        if (rowFound) {
            const filteredModifiedRows = this.getModifiedRows.filter(function (el) {
                return el.rowIndex != rowIndex;
            });
            this.setModifiedRows = filteredModifiedRows;
        }
    }

    // onCellValueChanged($event) {
    //     if (!$event.oldValue) {
    //         $event.oldValue = '';
    //     }
    //     if ($event.value === $event.oldValue) {
    //         return;
    //     }
    //     let modifiedRows: Array<any> = $event.api.TRCContext.modifiedRows;
    //     if ($event.value === $event.oldValue) {
    //         /// Remove entry if no change in value.
    //         if (modifiedRows.find(i => i.rowIndex != $event.rowIndex)) {
    //             $event.api.TRCContext.modifiedRows = modifiedRows.filter(function(el) {
    //                 return el.rowIndex != $event.rowIndex;
    //             });
    //             return;
    //         }
    //     }

    //     if (modifiedRows.length == 0 || !modifiedRows.find(i => i.rowIndex == $event.rowIndex)) {
    //         modifiedRows.push({
    //             rowIndex: $event.rowIndex,
    //             colIds: [
    //                 {
    //                     colId: $event.column.colId,
    //                     oldValue: $event.oldValue,
    //                     value: $event.value
    //                 }
    //             ]
    //         });
    //     } else {
    //         let exsitingModifiedCell = modifiedRows.find(i => i.rowindex == $event.rowIndex && i.colIds.find(j => j.colId === $event.column.colId));
    //         if (exsitingModifiedCell) {
    //             exsitingModifiedCell.value = $event.value;
    //         } else {
    //             modifiedRows
    //                 .find(i => i.rowIndex == $event.rowIndex)
    //                 .colIds.push({
    //                     colId: $event.column.colId,
    //                     oldValue: $event.oldValue,
    //                     value: $event.value
    //                 });
    //         }
    //     }
    //     $event.api.TRCContext.modifiedRows = modifiedRows;
    // }
    onRowEditingStarted($event) {
        this.isRowInEditMode = true;
        // if(this.rowSelection === 'single'){
        //   let isCurrentSelectedRowIsModifiedRow = this.getModifiedRows.find(i=>i.rowIndex == $event.rowIndex);
        //   if(!isCurrentSelectedRowIsModifiedRow){
        //    this.stopGridEditing();
        //   }
        // }
    }

    /**
     * use output parameter if you dont want to use default
     * stop Editing implementation.
     * It will validate data and save changes if row is modified
     * @param $event
     */
    onRowEditingStopped($event) {
      // console.log('on row stop editing', $event.data);
     // this.rowChanged.emit({data: $event.data, rowIndex: $event.rowIndex });
        if (this.rowEditingStopped.observers.length > 0) {
            this.rowEditingStopped.emit($event);
            return;
        }
        this.isRowInEditMode = false;
        if (!this.isModified && !this.newRowNode) return;

        const isInvalid = this.checkValidationsOnStopEditing($event);
        if (isInvalid) {
            this.popupService.confirmBox(
                this.invalidDataMessage,
                ($action) => {
                    if ($action.confirm) {
                        if (this.newRowNode) {
                            this.deleteNewRow();
                        } else {
                            this.undoChanges();
                        }
                        $event.api.refreshCells();
                    } else {
                        if (this.newRowNode) {
                            this.keepRowInEditMode(0);
                        } else {
                            this.keepRowInEditMode(this.getModifiedRows[0].rowIndex);
                        }
                    }
                },
                {
                    cancelButtonText: this.cancelButtonText,
                    confirmButtonText: this.confirmButtonText,
                }
            );
        } else {
            if (this.newRowNode) {
                this.saveCreatedRows();
            } else if (this.isModified) {
                this.saveModifiedRows();
            }
        }
    }
    onCellEditingStarted($event) {}
    onCellEditingStopped($event) {}
    onReset() {}
    private checkValidationsOnStopEditing($event) {
        return this.applyValidationOnFullRow($event);
    }

    private checkInvalidColumn($event, column): Array<string> {
        const colDef = column.colDef;
        if (colDef && colDef.validationRules) {
            const val = $event.data[column.colId];
            let msgs = [];

            colDef.validationRules.customValidators = colDef.validationRules.customValidators || [];
            for (var validator in colDef.validationRules) {
                colDef.validationRules.validatorName = ValidationUtil.validatorMap(validator);
                colDef.validationRules.fieldHeaderName = colDef.headerName;
                const error = ValidationUtil.validate(val, colDef.validationRules);
                if (error) {
                    msgs.push(error);
                }
            }

            colDef.validationRules.customValidators.forEach((customValidator) => {
                customValidator.params = customValidator.params || {};
                customValidator.params.event = $event;
                const cusError = ValidationUtil.validate(val, customValidator);
                if (cusError) {
                    msgs.push(cusError);
                }
            });

            if (msgs.length > 0) {
                this.gridAPI.TRCContext.invalidRows.push({
                    rowIndex: $event.rowIndex,
                    colId: column.colId,
                    messages: msgs,
                });
            }
            column.colDef.cellClassRules = {
                'grid-cell-error': (p) => {
                    return this.gridAPI.TRCContext.invalidRows.find((i) => i.rowIndex == p.rowIndex && i.colId == p.colDef.field);
                },
            };
            return msgs;
        }
        return [];
    }

    private applyValidationOnFullRow($event): boolean {
        this.gridAPI.TRCContext.invalidRows = [];
        $event.columnApi.getAllColumns().forEach((column) => {
            this.checkInvalidColumn($event, column);
        });
        $event.api.refreshCells();
        return this.isInvalid;
    }

    //-------------------- PUBLIC METHODS ------------------ //

    public getAllRowNodes(property?: string): Array<RowNode> {
        let items = [];
        this.gridAPI.forEachNode(function (node) {
            if (property) {
                items.push(node[property]);
            } else {
                items.push(node);
            }
        });
        return items;
    }
    public stopGridEditing() {
        this.gridAPI.stopEditing();
    }
    public completeAddOperation() {
        this.newRowNode = null;
        this.gridAPI.TRCContext.modifiedRows = [];
        this.isRowInEditMode = false;
    }
    public completeUpdateOperation() {
        this.gridAPI.TRCContext.modifiedRows = [];
        this.isRowInEditMode = false;
    }
    public completeDeleteOperation(selectedRow) {
        this.deleteRowClient([selectedRow]);
    }
    public setColDef(colDef) {
        console.log('colDef undated in grid', colDef);
        this.gridAPI.setColumnDefs(colDef);
        this.setupValidationAndFormatting(this.columnDefsInternal);
    }
    public RefreshGridData() {
        console.log('in grid refresh data for srcUrl', this.serviceUrl);
        this.setupRowData(this.serviceUrl);
    }
    /**
     * Use this Method for POST.
     * @param payload
     */
    public submit(payload: any): Observable<any> {
        if (!this.serviceUrl) throw 'Request url parameter is not defiend in Grid paramter.';
        return this.httpClient.post(this.serviceUrl, payload);
    }
    /**
     * Use this Method for DELETE.

     */
    public delete() {
        if (!this.editable) {
            console.warn('Delete row function works with editable grid. Please set the editable flag true.');
            return;
        }

        let selectedRows: Array<any> = this.gridAPI.getSelectedNodes();
        //let selectedNodes: Array<any> = this.gridAPI.getSelectedNodes();

        if (!selectedRows || selectedRows.length == 0) {
            this.popupService.notify('info', 'Please select a row for delete.');
            return;
        }

        this.popupService.confirmBox(
            this.deleteConfirmMessage,
            ($event) => {
                if ($event.confirm) {
                    //MA: loop added to delete multiple rows

                    selectedRows.forEach((selectedNode) => {
                        let selectedRow = selectedNode.data;
                        const key: any = selectedRow[this.columnDefsInternal[0].keyField] ? selectedRow[this.columnDefsInternal[0].keyField].toString().trim() : '';
                        const DELETE_MSG = this.deleteSuccessMessage.replace('{tag}', key); //`Row (${key}) has been successfully deleted.`;
                        if (!this.serviceUrl || this.serviceUrl.length <= 0) {
                            this.rowDataChanged.emit({
                                mode: 'delete',
                                data: selectedRow,
                                rowIndex: selectedRow.rowIndex,
                                rowNode: selectedNode,
                            });
                            return;
                        }
                        const deleteUrl: string = `${this.geturlWithoutQueryParam()}/${key}`; // MA: get url without query params instead of full url

                        //MA: add payload for delete request
                        let payload = {};
                        if (this.beforeDelete) {
                            payload = this.beforeDelete(selectedRow);
                        }
                        const headers = new HttpHeaders({
                            'Content-Type': 'application/json; charset=utf-8',
                        });

                        const options = { headers: headers, body: payload };
                        this.httpClient.delete(deleteUrl, options).subscribe(
                            (res) => {
                                console.info(DELETE_MSG);
                                this.deleteRowClient([selectedRow]);
                                this.popupService.notify('success', DELETE_MSG);
                                this.afterDelete.emit({ request: payload, response: res });
                            },
                            (error) => {
                                this.popupService.notify('error', 'Server Error!');
                                console.info(`Could not delete records from server.`);
                            }
                        );
                    });
                }
            },
            this.deletePopupConfig
        );
    }

    //TODO REMOVE IT
    private mapControlStaticData(col: any) {
        if (!col || !col.controlConfig || !col.controlConfig.data) return;
        if (!col.controlConfig.nameValue) {
            console.error('please define nameValue property in controlConfig.');
            return;
        }
        //  console.log(col);

        col.valueGetter = (params) => {
            return params.data[params.colDef.field];

            const valueFromRowData = params.data[col.field];
            // const key = col.controlConfig.nameValue.value;
            // const value = col.controlConfig.nameValue.name;
            // let dataVal = col.controlConfig.data.find(i => i[key] == valueFromRowData);
            // if (col.controlConfig.defaultSelectedKey) {
            //     dataVal = col.controlConfig.data.find(i => i[key] == col.controlConfig.defaultSelectedKey);
            // }
            // //params.data[col.field] = dataVal ? dataVal[key] : params.data[col.field];
            // if (dataVal) {
            //     let val = dataVal[key];
            //     if (val && val != '' && !isNaN(val)) {
            //         val = parseInt(val, 10);
            //     }
            //     params.data[col.field] = val;
            // } else {
            //     if (col.controlConfig.data && col.controlConfig.data.length > 0) {
            //         let val = col.controlConfig.data[0][key];
            //         if (val && val != '' && !isNaN(val)) {
            //             val = parseInt(val, 10);
            //         }
            //         params.data[col.field] = val;
            //     }
            //     //params.data[col.field] = '';
            // }
            // return dataVal ? dataVal[value] : valueFromRowData;
        };
    }
    /**
     * Use this method for save grid changes.
     */
    public saveChanges() {
        //MA: on save button click stop editing;

        this.gridAPI.stopEditing();
        //MA:END change
        // this.saveCreatedRows();
        // this.saveModifiedRows();
    }
    onRowDoubleClicked(event) {
        this.rowDoubleClicked.emit(event);
    }
    /**
     * Use this method to add new row in grid.
     */
    public add(row?: any) {
        this.gridAPI.setQuickFilter('');
        this.setSort({});
        if (this.getModifiedRows.length > 0 || this.newRowNode || this.isRowInEditMode) {
            this.saveChanges();
            // this.saveModifiedRows();
            return;
        }
        if (this.newRowNode) {
            this.deleteNewRow();
        }
        if (!this.newRowNode) {
            // this.isRowInEditMode = true;
            const positionIndex = 0;
            let trans = row || {};
            //MA: on ful row eit send compete row on add instaed of only updated columns
            if (this.fullRowEdit) {
                trans = row || JSON.parse(JSON.stringify(this.defaultBlankRow));
            }
            this.addRow(trans, positionIndex);
            //this.gridAPI.applyTransaction({ add: [trans], addIndex: positionIndex });

            this.newRowNode = this.gridAPI.getDisplayedRowAtIndex(positionIndex);
            this.newRowNode.isNewRow = true;
            this.keepRowInEditMode(0);
            //this.rowDataChanged.emit({ mode: 'add', data: this.newRowNode.data, rowIndex: 0 })
            console.log('New Row Node', this.newRowNode);
        }
    }

    public addRow(row, positionIndex): void {
        this.gridAPI.applyTransaction({ add: [row], addIndex: positionIndex });
    }
    public setSort(sortModel): void {
        this.gridAPI.setSortModel(sortModel);
    }
    public setFilter(sortModel): void {
        this.gridAPI.setFilterModel(sortModel);
    }
    public setColumnState(sortModel): void {
        this.gridAPI.resetColumnState(sortModel);
    }

    /**
     * Undo all current changes.
     */
    public undoChanges() {
        const revertedModifiedChanges = this.undoAllCurrentChanges();
        if (revertedModifiedChanges) {
            this.setModifiedRows = [];
            this.setInvalidRows = [];
            this.newRowNode = null;
            this.gridAPI.redrawRows();
        } else {
            console.log('TRC-Grid: data is update to date, no current changes for undo.');
        }
        this.onUndoChanges.emit(this.gridOptions);
    }
    public onPrintClick() {
        if (this.rowData.length <= 0) {
            this.popupService.notify('info', 'No records to print');
        } else {
            console.log('in print click');
            // TODO: add spinner
            if (this.rowData.length > 1000) {
                this.popupService.notify('info', 'Printing large data can slow down the browser. Please filter data to few records.');
            } else {
                this.setPrinterFriendly();
                setTimeout(() => {
                    print();
                    this.setNormal();
                }, 2000);
            }
        }
    }

    setPrinterFriendly() {
        const eGridDiv: HTMLElement = document.querySelector('#myGrid');
        eGridDiv.style.height = '';
        eGridDiv.style.width = '';
        this.gridAPI.setDomLayout('print');
    }
    setNormal() {
        const eGridDiv: HTMLElement = document.querySelector('#myGrid');
        eGridDiv.style.height = 'calc(100vh - 190px)';
        eGridDiv.style.width = 'col-12';
        // this.gridApi.refreshHeader();
        // this.gridApi.rowData = this.rowData;
        this.gridAPI.setDomLayout(null);
    }
    exportData(fileName) {
        var params = {
            skipHeader: false,
            skipFooters: true,
            skipGroups: true,
            fileName: fileName,
        };
        this.gridAPI.exportDataAsCsv(params);
    }
    onKeyUp($event) {
        this.onKeyPress.emit($event);
        if ($event.keyCode === 13) {
            this.onEnter.emit($event);
        }
    }
    //------------------------------------------------------//
}
