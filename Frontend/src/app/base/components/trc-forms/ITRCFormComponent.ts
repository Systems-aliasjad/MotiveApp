import { FormFieldColSpan } from '../../../shared/constants/types';

/**
 * Interface used for dynamic field configuration.
 */
export interface IFormConfig {
    width?: string;
    height?: string;
    extended?: any;
    fields: IFormFieldConfig[];
    callback?: any;
}
export interface IFormFieldConfig {
    label?: string;
    name?: string;
    inputType?: string;
    options?: string[] | any;
    collections?: any;
    type: string;
    value?: any;
    validations?: Validator[];
    colSpan?: FormFieldColSpan;
    rowSpan?: number;
    dataSource?: IFormFieldDataSource;
    field?: string;
    readOnly?: boolean;
    height?: string;
}

export interface IFormFieldDataSource {
    url: string;
    nameValue: any;
}
export interface Validator {
    name: string;
    validator: any;
    message: string;
}
