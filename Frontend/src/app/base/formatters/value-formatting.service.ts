import { Injectable } from '@angular/core';
import { IValueFormatterParams } from './IValueFormatterParams';
import { ValueFormatterUtil } from './ValueFormatterUtil';
import { BaseHttpService } from '../../http/BaseHttpService';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ValueFormattingService {
  constructor(private httpServcie: BaseHttpService) {

  }
  public format(value: any, formatter: IValueFormatterParams, params?:any) {
    // if(formatter.params&& formatter.params.colDef && formatter.params.colDef.controlConfig) {
    //   const nv = formatter.params.colDef.controlConfig.nameValue || { "name": "name", "value": "value" };
    //   const url = formatter.params.colDef.controlConfig.sourceUrl[0];
    //   if (url) {
    //     setTimeout(() =>{
    //       let data = this.httpServcie.getData(url).map((res) => {
    //         return {
    //           name: res[nv.name],
    //           value: res[nv.value]
    //         }
    //       }).toPromise();
    //       formatter.params.colDef.controlConfig.data = data;
    //     },300);


    //   }
    // }
    return ValueFormatterUtil.formatValue(value, formatter);


  }
}
