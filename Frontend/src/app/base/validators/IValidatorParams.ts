export interface IValidatorParams {
    validatorName: string;
    message: string;
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
    nullable?:boolean;
    fieldHeaderName?:string;
    field?:string;
    params?:any;
    event?:any;
}
