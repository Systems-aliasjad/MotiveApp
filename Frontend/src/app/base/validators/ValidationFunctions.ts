import { IValidationMessage } from './IValidationMessage';
import { IValidatorParams } from './IValidatorParams';

export function requiredFieldValidator(value: any, params: IValidatorParams): IValidationMessage {
    if (!params.required || value == '0') return null;
    const expression: boolean = !value || /^\s*$/.test(value);
    const message: string = params.requiredFieldMessage || `${params.fieldHeaderName} field is required.`;
    return validationHandler(expression, message);
}

export function numberFieldValidator(value: any, params: IValidatorParams): IValidationMessage {
    if (!value) return;
    const predicate: boolean = !/^\d+$/.test(value);
    const message: string = params.numberFieldMessage || 'Please enter valid number';
    return validationHandler(predicate, message);
}

export function minLengthFieldValidator(value: any, params: IValidatorParams): IValidationMessage {
    const predicate: boolean = value && value.length < params.minLength;
    const message: string = params.minLengthMessage || `Value must be greater than ${params.minLength}`;
    return validationHandler(predicate, message);
}

export function maxLengthFieldValidator(value: string, params: IValidatorParams): IValidationMessage {
    const predicate: boolean = value && value.length > params.maxLength;
    const message: string = params.maxLengthMessage || `Value must be less than ${params.maxLength}`;
    return validationHandler(predicate, message);
}
export function emailFieldValidator(value: string, params: IValidatorParams): IValidationMessage {
    const predicate: boolean = value && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
    const message: string = params.emailFieldMessage || `Please enter valid email address`;
    return validationHandler(predicate, message);
}

function validationHandler(predicate: boolean, message): IValidationMessage {
    if (predicate) {
        return { message: message };
    }
    return null;
}

export function unixIdValidator(value: string, validatator: IValidatorParams): IValidationMessage {
    const gridApi: any = validatator.params.event.api;
    const param: any = validatator.params || {};
    const message: any = param.message || 'Duplicate value.';
    let isDuplicate = false;
    value = value || '';
    if (
      param &&
      param.event &&
      param.event.data &&
      value &&
      value.trim().toLowerCase() == 'none'
      && param.event.data['activeFlag']
      && param.event.data['activeFlag'].trim().toLowerCase() == 'n'
      ) {
        return validationHandler(false, message);
    }
    gridApi.forEachNode(function(node) {
        let dataField = node.data[param.field] || '';

        if (dataField.trim() == value.trim() && param.event.rowIndex != node.rowIndex) {
            isDuplicate = true;
        }
    });
    return validationHandler(isDuplicate, message);
}
export function duplicateValidator(value: string, validatator: IValidatorParams): IValidationMessage {
    const gridApi: any = validatator.params.event.api;
    const param: any = validatator.params || {};
    const message: any = param.message || 'Duplicate value.';
    let isDuplicate = false;
    gridApi.forEachNode(function(node) {
        let dataField = node.data[param.field] || '';
        value = value || '';
        if (dataField.trim() == value.trim() && param.event.rowIndex != node.rowIndex) {
            isDuplicate = true;
        }
    });
    return validationHandler(isDuplicate, message);
}
