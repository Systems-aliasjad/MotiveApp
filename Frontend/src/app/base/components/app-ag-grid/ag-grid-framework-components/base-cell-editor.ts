import { ICellEditorAngularComp } from 'ag-grid-angular';
import { IValidationMessage } from '../../../validators/IValidationMessage';
import { IValidationRuleParams } from '../../../validators/IValidationRuleParams';
import { IValidatorParams } from '../../../validators/IValidatorParams';
import { IValueFormatterParams } from '../../../formatters/IValueFormatterParams';
import { ValueFormatterUtil } from '../../../formatters/ValueFormatterUtil';
import { ValidationUtil } from '../../../validators/ValidationUtil';
import { dateFormatter } from '../../../formatters/ValueFormatters';

export abstract class BaseCellEditor implements ICellEditorAngularComp {
    constructor() {}
    public cellValue: any = null;
    protected colDef: any = [{}];
    abstract onGetValue(value: any);
    abstract onInit(params: any);
    protected customValidators: Array<any> = [];
    protected validationSummary: Array<IValidationMessage>;
    private hasValidationRule: boolean = false;
    private hasValueFormatters: boolean = false;
    private validationRule: IValidationRuleParams = {};
    private valueFormatters: Array<IValueFormatterParams> = [];
    protected params: any = {};
    public cellWidth: string = '180px';
    protected isInvalidValue: boolean = false;

    agInit(params: any): void {

        this.isInvalidValue = false;
        this.params = params;
        this.cellValue = params.value;
        this.cellWidth = `${this.params.column.actualWidth}px`;
        //this.params.column.context.isInvalid = false;
        this.validationRule = params.colDef.validationRules;
        this.valueFormatters = params.colDef.valueFormatters;
        this.hasValidationRule = !!this.validationRule;
        this.hasValueFormatters = !!this.valueFormatters;
        //this.params.colDef.cellClassRules = null;
        // if (this.validationRule && this.validationRule.highlightField != false) {
        //     this.params.colDef.cellClassRules = {
        //         "grid-cell-error": (p) => {
        //             return true;
        //         }
        //     }
        // }
        this.onInit(params);

    }
    getValue() {
     // this.validationSummary = [];
      /*
        if (this.hasValidationRule) {
            this.checkValidations(this.cellValue);

            if (this.validationSummary.length > 0) {
                this.params.invalidCell = this.params.column.colId;
            }

            //---
            let invalidRows: Array<any> = this.params.api.TRCContext.invalidRows;
            const invalidCell = invalidRows.find(i => i.rowIndex === this.params.rowIndex && i.colId === this.params.column.colId);
            if (this.validationSummary && this.validationSummary.length > 0) {
                if (invalidCell) {
                    invalidCell.messages = this.validationSummary;
                } else {
                    invalidRows.push({
                        rowIndex: this.params.rowIndex,
                        colId: this.params.column.colId,
                        messages: this.validationSummary,
                        valule: this.cellValue,
                        oldValue: this.params.value
                    });
                }
            } else {
                if (invalidCell) {
                    this.params.api.TRCContext.invalidRows = invalidRows.filter(function(el) {
                        return el.rowIndex != invalidCell.rowIndex;
                    });
                }
            }
            this.params.colDef.cellClassRules = {
                'grid-cell-error': p => {
                    if (this.params.api.TRCContext.invalidRows.find(i => i.rowIndex == p.rowIndex && i.colId == p.colDef.field)) {
                        return true;
                    }
                }
            };
            //----
            if (this.params.api.TRCContext.onValidation) {
                this.params.api.TRCContext.onValidation(this.params, this.validationSummary);
            }
        }
        */
        return this.onGetValue(this.cellValue);
    }

    private checkFormatting(cellValue: any): any {
        this.valueFormatters.forEach((formatter: IValueFormatterParams) => {
            cellValue = ValueFormatterUtil.formatValue(cellValue, formatter);
        });
        return cellValue;
    }
    private checkValidations(cellValue: any): void {
        this.validationSummary = [];

        this.customValidators = this.validationRule.customValidators || [];
        const defaultValidationResult: Array<IValidationMessage> = this.defaultValidations(cellValue, this.validationRule);
        if (defaultValidationResult.length > 0) {
            this.validationSummary.push(...defaultValidationResult);
        }
        this.customValidators.forEach((validator: IValidatorParams) => {
            const errorMessage = ValidationUtil.validate(cellValue, validator);
            if (errorMessage) {
                this.validationSummary.push(errorMessage);
            }
        });
        if (this.validationSummary.length > 0) {
            if (this.validationRule.showErrors != false) {
                let consolidateErrors = this.validationSummary
                    .reverse()
                    .map(i => i.message)
                    .join('\n');
                //this.cellValue = "";
                //alert(consolidateErrors);
            }
        } else {
        }
    }
    public defaultValidations(value: any, params: IValidationRuleParams): Array<IValidationMessage> {
        let validationMessages: Array<IValidationMessage> = [];
        let defaultValidators: Array<IValidatorParams> = [];
        if (params.required) {
            defaultValidators.push({
                validatorName: 'requiredFieldValidator',
                message: params.requiredFieldMessage || 'This field is required.'
            });
        }
        if (params.number) {
            defaultValidators.push({
                validatorName: 'numberFieldValidator',
                message: params.numberFieldMessage || 'Please enter valid number.'
            });
        }
        if (params.email) {
            defaultValidators.push({
                validatorName: 'emailFieldValidator',
                message: params.emailFieldMessage || 'Please enter valid email.'
            });
        }
        if (params.minLength) {
            defaultValidators.push({
                validatorName: 'minLengthFieldValidator',
                message: params.minLengthMessage || `Value should not less than ${params.minLength} characters.`,
                minLength: params.minLength
            });
        }
        if (params.maxLength) {
            defaultValidators.push({
                validatorName: 'maxLengthFieldValidator',
                message: params.maxLengthMessage || `Value can not be greater than ${params.maxLength} characters.`,
                maxLength: params.maxLength
            });
        }

        defaultValidators.forEach((validatorParams: IValidatorParams) => {
            const errorMessage = ValidationUtil.validate(value, validatorParams);
            if (errorMessage) {
                validationMessages.push(errorMessage);
            }
        });
        return validationMessages;
    }

    isPopup?(): boolean {
        return false;
    }
    getPopupPosition?(): string {
        return 'under';
    }

    isCancelAfterEnd?(): boolean {
        return false;
        // throw new Error("Method not implemented.");
    }
    focusIn?(): void {

    }
    focusOut?(): void {

        //  throw new Error("Method not implemented.");
    }
    getFrameworkComponentInstance?() {
        // throw new Error("Method not implemented.");
    }
}
