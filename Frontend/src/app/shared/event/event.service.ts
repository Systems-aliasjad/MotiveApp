import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class EventService {
    private observerStore: {} = {};

    constructor() {}

    getSubscriber(key: string): EventEmitter<any> {
        const eventEmitter: EventEmitter<any> = this.observerStore[key];

        if (eventEmitter && eventEmitter.observers && eventEmitter.observers.length > 0) {
            return eventEmitter;
        } else {
            this.observerStore[key] = new EventEmitter();
        }
        return this.observerStore[key];
    }

    removeSubscriber(key: string): void {
        const eventEmitter: EventEmitter<any> = this.observerStore[key];

        if (eventEmitter && eventEmitter.observers && eventEmitter.observers.length > 0) {
            eventEmitter.unsubscribe();
            delete this.observerStore[key];
        }
    }
}

export class EventKeys {
    public static EK_LookupListEditor_GetFieldName = 'lookup-list-editor-field';
    public static EK_LookupListEditor_GetLookupData = 'lookup-list-editor-data';
    public static EK_InformationRenderer_GetDetails = 'information-renderer-details';
}
