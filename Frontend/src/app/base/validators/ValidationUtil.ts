import { IValidatorParams } from "./IValidatorParams";
import { IValidationMessage } from "./IValidationMessage";
import * as ValidationFn from "./ValidationFunctions";
import { ValidatorMapper } from "./validator-mapper";

export class ValidationUtil {
    public static validate(value: any,  params: IValidatorParams): IValidationMessage {

        if (!ValidationFn[params.validatorName]) {
            console.warn(`ValidatorName: ${params.validatorName} does not exists.`);
            return null;
        }
        return ValidationFn[params.validatorName](value, params);
    }
    public static validatorMap(validationType):string {
      return ValidatorMapper[validationType]
    }

}
