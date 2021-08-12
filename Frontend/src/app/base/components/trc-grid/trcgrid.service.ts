import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/src/Subject';

@Injectable({
    providedIn: 'root',
})
export class TRCGridService {
    public submitSubject = new Subject<any>();
    constructor() {}

    public Submit(payload: any) {
        this.submitSubject.next(payload);
    }
    public beforeSubmit() {}
    public afterSubmit() {}
}
