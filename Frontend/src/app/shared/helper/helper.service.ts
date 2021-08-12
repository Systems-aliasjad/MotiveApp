import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class HelperService {
    constructor() { }

    public deepCopy = (inObject) => {
        let outObject, value, key;

        if (typeof inObject !== 'object' || inObject === null) {
            return inObject; // Return the value if inObject is not an object
        }

        // Create an array or object to hold the values
        outObject = Array.isArray(inObject) ? [] : {};

        // tslint:disable-next-line: forin
        for (key in inObject) {
            value = inObject[key];
            // Recursively (deep) copy for nested objects, including arrays
            outObject[key] = this.deepCopy(value);
        }

        return outObject;
    };

    public getThreeDigitNumber(id) {
        const length = 3;
        if (id <= 999) {
            let len = length - ('' + id).length;
            return (len > 0 ? new Array(++len).join('0') : '') + id;
        } else {
            return '';
        }
    }
    public isEmpty(obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }
    public exportToCsv(filename: string, rows: object[]) {
        if (!rows || !rows.length) {
            return;
        }
        const separator = ',';
        const keys = Object.keys(rows[0]);
        const csvContent =
            keys.join(separator) +
            '\n' +
            rows
                .map((row) => {
                    return keys
                        .map((k) => {
                            let cell = row[k] === null || row[k] === undefined ? '' : row[k];
                            cell = cell instanceof Date ? cell.toLocaleString() : cell.toString().replace(/"/g, '""');
                            if (cell.search(/("|,|\n)/g) >= 0) {
                                cell = `"${cell}"`;
                            }
                            return cell;
                        })
                        .join(separator);
                })
                .join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        if (navigator.msSaveBlob) {
            // IE 10+
            navigator.msSaveBlob(blob, filename);
        } else {
            const link = document.createElement('a');
            if (link.download !== undefined) {
                // Browsers that support HTML5 download attribute
                const url = URL.createObjectURL(blob);
                link.setAttribute('href', url);
                link.setAttribute('download', filename);
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
        return true;
    }

    public downLoadFile(data: any, type: string, fileName: string) {
        const blob = new Blob([data], { type: type });
        const url = window.URL.createObjectURL(blob);
        //  let pwa = window.open(url);
        // IE11 & Edge
        if (navigator.msSaveBlob) {
            navigator.msSaveBlob(data, fileName);
        } else {
            // In FF link must be added to DOM to be clicked
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(data);
            link.setAttribute('download', fileName);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }

}
