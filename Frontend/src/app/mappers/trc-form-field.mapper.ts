
import { SelectListComponent } from "../base/components/trc-forms/trc-select-list/select-list.component";
import { DatePickerComponent } from "../base/components/trc-forms/trc-date-picker/date-picker.component";
import { RadioButtonComponent } from "../base/components/trc-forms/trc-radio-button/radio-button.component";
import { CheckboxComponent } from "../base/components/trc-forms/trc-checkbox/checkbox.component";
import { TrcButtonComponent } from "../base/components/trc-forms/trc-button/trc-button.component";
import { TRCTextboxComponent } from "../base/components/trc-forms/trc-textbox/TextboxFieldComponent";
import { TrcTextareaComponent } from "../base/components/trc-forms/trc-textarea/trc-textarea.component";

export const TRCFormFieldMapper = {
    input: TRCTextboxComponent,
    button: TrcButtonComponent,
    select: SelectListComponent,
    date: DatePickerComponent,
    radiobutton: RadioButtonComponent,
    checkbox: CheckboxComponent,
    textarea: TrcTextareaComponent
  };
