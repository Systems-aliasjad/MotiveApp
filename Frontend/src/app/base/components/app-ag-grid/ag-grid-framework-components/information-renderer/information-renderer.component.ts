import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-community';
import { EventService, EventKeys } from '../../../../../shared/event/event.service';

@Component({
    selector: 'app-information-renderer',
    templateUrl: './information-renderer.component.html',
    styleUrls: ['./information-renderer.component.css'],
})
export class InformationRendererComponent implements ICellRendererAngularComp {
    params: any;
    constructor(private eventService: EventService) { }

    refresh(params: any): boolean {
        return false;
    }

    agInit(params: ICellRendererParams): void {

        this.params = params;
    }

    afterGuiAttached?(params?: IAfterGuiAttachedParams): void { }

    click($event) {
        this.eventService.getSubscriber(EventKeys.EK_InformationRenderer_GetDetails).emit(this.params.data);
    }
}
