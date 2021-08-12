import { Injectable } from '@angular/core';
import { IValidationMessage } from './IValidationMessage';
import { IValidationRuleParams } from './IValidationRuleParams';
import { IValidatorParams } from './IValidatorParams';
import * as ValidationFn from './ValidationFunctions';

export class ValidationService {
  constructor() {
  }
  public validate(value: any, params: IValidatorParams): IValidationMessage {
    
    if (!ValidationFn[params.validatorName]) {
      throw (`ValidatorName: ${params.validatorName} does not exists.`);
    }
    return ValidationFn[params.validatorName](value, params);
  }
  
  public showMessages(validationMessages: Array<IValidationMessage>, duration?: number): void {
    const messages = validationMessages.map(i => i.message).join("\n");
    // this.snackBar.open(messages,'close',{
    //   duration: duration || 2000,
    //   horizontalPosition:"right",
    //   verticalPosition:"top"

    // })
  }
}
