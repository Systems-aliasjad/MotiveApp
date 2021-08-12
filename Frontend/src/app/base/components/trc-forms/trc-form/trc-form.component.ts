import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IFormFieldConfig, IFormConfig } from '../ITRCFormComponent';
@Component({
    selector: 'trc-form',
    templateUrl: './trc-form.component.html',
    styleUrls: ['./trc-form.component.css'],
})
export class TrcFormComponent implements OnInit {
    @Input() fields: IFormFieldConfig[] = [];
    @Input() data: any;
    @Output() submit: EventEmitter<any> = new EventEmitter<any>();
    @Input() callback: any;
    form: FormGroup;
    get value() {
        return this.form.value;
    }
    constructor(private fb: FormBuilder) {}
    /**
     * TRCForm control uses trcFormFieldDirective directive to generate forms field.
     */
    ngOnInit() {
        this.form = this.initControls();
    }
    /**
     * this event is attached with form submit.
     * it fires validations and call submit event if form is valid.
     */
    onSubmit(event: Event) {
        // event.preventDefault();
        // event.stopPropagation();
        if (this.form.valid) {
            console.log(this.form.value);
            if (this.data && this.data.callback) {
                this.data && this.data.callback(this.form.value);
            }
            this.submit.emit(this.form.value);
        } else {
            this.validateAllFormFieldsOnSubmit(this.form);
        }
    }
    /**
     * Finds the control list from form configuration.
     * Added control in from group.
     * Apply validation functions from configuration.
     */
    initControls() {
        const group = this.fb.group({});
        this.fields.forEach((field) => {
            if (field.type === 'button') return;
            if (this.data && this.data.data && field.field) {
                field.value = this.data.data[field.field] || '';
                field.label = field.label;
            }
            const control = this.fb.control(field.value, this.applyValidations(field.validations || []));
            if (group.contains(field.name)) {
                group.removeControl(field.name);
            }
            group.addControl(field.name, control);
        });
        return group;
    }
    updateValues() {
        this.fields.forEach((field) => {
            if (field.type === 'button') {
                return;
            }
            if (this.data && this.data.data && field.field) {
                field.value = this.data.data[field.field] || '';
                field.label = field.label;
            }
            const control = this.fb.control(field.value, this.applyValidations(field.validations || []));
            this.form.controls[field.name].setValue(field.value);
        });
    }
    /**
     * Find the validators from configuration and attach with form.
     * @param validations
     */
    applyValidations(validations: any) {
        if (validations.length > 0) {
            const validators = [];
            validations.forEach((valid) => {
                validators.push(valid.validator);
            });
            return Validators.compose(validators);
        }
        return null;
    }
    /**
     * This events fires on form submit button.
     */
    validateAllFormFieldsOnSubmit(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach((field) => {
            const control = formGroup.get(field);
            control.markAsTouched({ onlySelf: true });
        });
    }
}
