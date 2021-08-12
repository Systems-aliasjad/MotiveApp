import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { IFormFieldConfig } from 'src/app/base/components/trc-forms/ITRCFormComponent';
import { TrcFormComponent } from 'src/app/base/components/trc-forms/trc-form/trc-form.component';
import { CounterPartyExpandedNoteService } from '../services/counter-party-expanded-note.service';

@Component({
    selector: 'app-counter-party-expanded-note',
    templateUrl: './counter-party-expanded-note.component.html',
    styleUrls: ['./counter-party-expanded-note.component.scss'],
})
export class CounterPartyExpandedNoteComponent implements OnInit, AfterViewInit {
    @Input()
    producerBranchKey: number;
    @ViewChild('trcForm')
    trcForm: TrcFormComponent;
    formData: any = {};
    fields: IFormFieldConfig[] = [{ type: 'textarea', name: 'notes', field: 'notes', label: 'Notes', colSpan: 12, rowSpan: 5, height: '240px' }];
    formLoaded: boolean;
    constructor(private counterPartyExpandedNoteService: CounterPartyExpandedNoteService) {}

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        this.counterPartyExpandedNoteService.getBankNotes(this.producerBranchKey).subscribe((res) => {
            console.log('CounterPartyExpandedNoteComponent:', res);
            this.formData = { data: res.data };
            this.formLoaded = true;
        });
    }

    submit($event): void {
        console.log($event);
    }
}
