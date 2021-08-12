import * as moment from 'moment';
import { IValueFormatterParams } from './IValueFormatterParams';

export function letterCaseFormatter(value: any, formatter: IValueFormatterParams): any {
    {
        const letterCase = formatter.params.toLowerCase();
        if (letterCase == 'uppercase') {
            return value.toUpperCase();
        } else if (letterCase == 'lowercase') {
            return value.toLowerCase();
        }
        return value;
    }
}
export function percentFormatter(value: any, formatter: IValueFormatterParams) {
    return isNaN(parseFloat(value)) ? value : parseFloat(value).toFixed(2) + '%';
}
export function charLengthFormatter(value: any) {
    return value;
}
export function dayFormatter(value: any) {
    const fullTimeVal = value; // '175.21:59:45.3662333';
    // let fullTimeVal = params.value;
    const days = fullTimeVal.substring(0, fullTimeVal.indexOf('.')) + ' Days ';
    let time = fullTimeVal.substring(fullTimeVal.indexOf('.') + 1, fullTimeVal.lastIndexOf('.'));
    time = time + '.0';
    const finalString = days + time;
    // console.log('finalString', finalString);
    return finalString;
}
export function dateTimeFormatter(value: any, formatter: IValueFormatterParams): any {
    value = new Date(value);
    return value.toLocaleString();
}

export function dateFormatter(value: any, formatter: IValueFormatterParams): any {
    let dateFormatFrom = formatter.params.from;
    let dateFormatTo = formatter.params.to;
    if (dateFormatFrom && dateFormatTo) {
        dateFormatFrom = dateFormatFrom.toUpperCase();
        dateFormatTo = dateFormatTo.toUpperCase();
        let date = moment(value, dateFormatFrom);
        if (date.isValid()) {
            value = date.format(dateFormatTo);
        }
    } else if (!dateFormatFrom) {
        let date = moment(value);
        if (date.isValid()) {
            value = date.format(dateFormatTo);
        }
    }
    return value;
}
export function decimalFormatter(value: any, formatter: IValueFormatterParams) {
    if (!value) return value;
    return isNaN(value) ? value : parseFloat(value).toFixed(formatter.params);
}
export function currencyFormatter(value: any, formatter: IValueFormatterParams) {
    if (!value) return value;
    let a = isNaN(value)
        ? value
        : parseFloat(value)
              .toFixed(2)
              .replace(/\d(?=(\d{3})+\.)/g, '$&,');
    return formatter.params + a;
}
export function suffixFormatter(value: any) {
    return value;
}
export function ValueFormatter(value: any, formatter: IValueFormatterParams) {
    let data = formatter.params.colDef.controlConfig.data;
    const index = data.findIndex((x) => x.value == value);
    return index >= 0 ? data[index].key : value;
}
export function prefixFormatter(value: any, formatter: IValueFormatterParams) {
    if (!value) return value;
    return `${formatter.params || ''} ${value}`;
}
export function lookupKeyValueFormatter(value: any, formatter: IValueFormatterParams) {
    if (
        !formatter ||
        !formatter.params ||
        !formatter.params.params ||
        !formatter.params.params.colDef.cellEditorParams ||
        !formatter.params.params.colDef.cellEditorParams.values ||
        formatter.params.params.colDef.cellEditorParams.values.length == 0 ||
        !value
    ) {
        return;
    }

    const params = formatter.params.params;
    const values = params.colDef.cellEditorParams.values || [];
    const nv = params.colDef.nameValue || { name: 'value', value: 'key' };
    const findValue = values.find((i) => i.value == value);

    params.colDef.selected = [];
    if (findValue) {
        params.colDef.selected.push({ name: findValue.name, value: value });
        return findValue.name;
    } else {
        if (params.colDef.defaultKey) {
            value = values.find((i) => i.value == params.colDef.defaultKey);
            if (value) {
                return value.name;
            }
            //params.data[params.colDef.field] = value.value;
        } else if (params.colDef.emptyOption) {
            return '';
        }
    }

    return values[0].name;
}
export function multiColLookupKeyValueFormatter(value: any, formatter: IValueFormatterParams) {
    if (
        !formatter ||
        !formatter.params ||
        !formatter.params.params ||
        !formatter.params.params.colDef.cellEditorParams ||
        !formatter.params.params.colDef.cellEditorParams.values ||
        formatter.params.params.colDef.cellEditorParams.values.length == 0 ||
        !value
    ) {
        return;
    }

    const params = formatter.params.params;
    const values = params.colDef.cellEditorParams.values || [];
    const nv = params.colDef.nameValue || { name: 'value', value: 'key' };
    const keyCols = params.colDef.cellEditorParams.columnsList.filter((x) => x.isKey == true);
    const displayCols = params.colDef.cellEditorParams.columnsList.filter((x) => x.isDisplayColumn == true);
    let keyCol = 'key';
    let displayCol = 'name';
    if (keyCols && keyCols.length > 0) {
        keyCol = keyCols[0].fieldId;
    }
    if (displayCols && displayCols.length > 0) {
        displayCol = displayCols[0].fieldId;
    }
    const findValue = values.find((i) => i[keyCol] == value);

    params.colDef.selected = [];
    if (findValue) {
        params.colDef.selected.push(findValue);
        return findValue[displayCol];
    } else {
        if (params.colDef.defaultKey) {
            value = values.find((i) => i.value == params.colDef.defaultKey);
            if (value) {
                return value.name;
            }
            //params.data[params.colDef.field] = value.value;
        } else if (params.colDef.emptyOption) {
            return '';
        }
    }

    return values[0].name;
}
