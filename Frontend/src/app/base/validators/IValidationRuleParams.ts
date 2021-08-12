export interface IValidationRuleParams {
    required?: boolean;
    number?: boolean;
    minLength?: number;
    maxLength?: number;
    range?: [];
    requiredFieldMessage?:string;
    numberFieldMessage?:string;
    minLengthMessage?:string;
    maxLengthMessage?:string;
    email?:boolean;
    emailFieldMessage?:string;
    customValidators?:[];
    errorClass?:string;
    highlightField?:boolean;
    showErrors?:boolean;
}