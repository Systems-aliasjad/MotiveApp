import { IValueFormatterParams } from "./IValueFormatterParams";
import * as  ValueFormatterFn from  "./ValueFormatters";
export class ValueFormatterUtil{
  
    public static formatValue(value:any, formatter: IValueFormatterParams):any{
        value = value || "";
       if(formatter.name && ValueFormatterFn[formatter.name]){
           value = ValueFormatterFn[formatter.name](value,formatter)
       }
       return value;
    }
}
