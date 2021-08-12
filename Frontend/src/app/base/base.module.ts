import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalDateFormatterPipe } from './pipes/local-date-formatter/local-date-formatter.pipe';
import { LoadingModule } from './components/loading/loading.module';
import { HighlightTextDirective } from './directives/highlight-text/highlight-text.directive';
import { TRCConfirmBoxComponent } from './components/trc-confirm-box/trc-confirm-box.component';
import { SelectListComponent } from './components/trc-forms/trc-select-list/select-list.component';
import { RadioButtonComponent } from './components/trc-forms/trc-radio-button/radio-button.component';
import { CheckboxComponent } from './components/trc-forms/trc-checkbox/checkbox.component';
import { DatePickerComponent } from './components/trc-forms/trc-date-picker/date-picker.component';
import { TrcFormComponent } from './components/trc-forms/trc-form/trc-form.component';
import { TrcButtonComponent } from './components/trc-forms/trc-button/trc-button.component';
import { TRCFormFieldDirective } from './directives/trc-form-field.directive';
import { AppMaterialModule } from '../core/app-material/app-material.module';
import { TrcNumericTextboxComponent } from './components/trc-forms/trc-numeric-textbox/trc-numeric-textbox.component';
import { TrcCurrencyTextboxComponent } from './components/trc-forms/trc-currency-textbox/trc-currency-textbox.component';
import { TRCTextboxComponent } from './components/trc-forms/trc-textbox/TextboxFieldComponent';
import { TrcToolbarComponent } from './components/trc-toolbar/trc-toolbar.component';
import { TrcGridSearchComponent } from './components/trc-grid-search/trc-grid-search.component';
import { TrcGridToolbarComponent } from './components/trc-grid-toolbar/trc-grid-toolbar.component';
import { AppConfigService } from './service/app-config.service';
import { TrcMultiColLookupComponent } from './components/trc-multi-col-lookup/trc-multi-col-lookup.component';
import { TrcAutoCompleteModule } from './components/trc-auto-complete/trc-auto-complete.module';
import { TrcTextareaComponent } from './components/trc-forms/trc-textarea/trc-textarea.component';

const appInitializerFn = (appConfig: AppConfigService) => {
  return () => {
    return appConfig.loadAppConfig();
  };
};
@NgModule({
  declarations: [
    LocalDateFormatterPipe,
    HighlightTextDirective,
    TRCConfirmBoxComponent,
    TRCTextboxComponent,
    SelectListComponent,
    RadioButtonComponent,
    CheckboxComponent,
    DatePickerComponent,
    TrcFormComponent,
    TrcButtonComponent,
    TRCFormFieldDirective,
    TrcNumericTextboxComponent,
    TrcCurrencyTextboxComponent,
    TrcToolbarComponent,
    TrcGridSearchComponent,
    TrcGridToolbarComponent,
    TrcMultiColLookupComponent,
    TrcTextareaComponent
  ],
  imports: [CommonModule, LoadingModule, AppMaterialModule, TrcAutoCompleteModule],
  exports: [
    LocalDateFormatterPipe,
    HighlightTextDirective,
    TRCFormFieldDirective,
    TrcFormComponent,
    TrcToolbarComponent,
    AppMaterialModule,
    TrcGridSearchComponent,
    TrcGridToolbarComponent,
    TrcMultiColLookupComponent
  ],
  providers: [
     {
       provide: APP_INITIALIZER,
       useFactory: appInitializerFn,
       multi: true,
       deps: [AppConfigService]
     }
   ],
  entryComponents: [TrcFormComponent, TRCTextboxComponent,
    TrcButtonComponent, CheckboxComponent, RadioButtonComponent,
    SelectListComponent, DatePickerComponent, TRCConfirmBoxComponent]
})
export class BaseModule { }
