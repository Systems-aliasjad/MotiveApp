import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { GridOverlayComponent } from './grid-overlay/grid-overlay.component';
import { AppMaterialModule } from '../../../core/app-material/app-material.module';
import { AgGridBaseComponent } from './ag-grid-base/ag-grid-base.component';
// import { AgGridCellSelectEditor } from './ag-grid-framework-components/select-list.editor';
// import { AgGridCellSelectRenderer } from './ag-grid-framework-components/select-list.renderer';
// import { BordereauActionsRenderer } from './ag-grid-framework-components/bordereau-action.renderer';
import { LookupListEditorComponent } from './ag-grid-framework-components/lookup-list-editor/lookup-list-editor.component';
import { DatepickerEditorComponent } from './ag-grid-framework-components/datepicker-editor/datepicker-editor.component';
import { InformationRendererComponent } from './ag-grid-framework-components/information-renderer/information-renderer.component';

import { GridTooltipComponent } from './ag-grid-framework-components/grid-tooltip/grid-tooltip.component';
import { TextboxEditorComponent } from './ag-grid-framework-components/textbox-editor/TextboxEditorComponent';
import { TRCGridComponent } from '../trc-grid/trcgrid.component';
import { ValueCellRendererComponent } from './ag-grid-framework-components/value-cell-renderer/value-cell-renderer.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CheckboxEditorComponent } from './ag-grid-framework-components/checkbox-editor/checkbox-editor.component';
import { CheckboxRenderer } from './ag-grid-framework-components/checkBoxRenderer';
import { MultiColLookupEditorComponent } from './ag-grid-framework-components/multi-col-lookup-editor/multi-col-lookup-editor.component';
import { AutoCompleteEditorComponent } from './ag-grid-framework-components/auto-complete-editor/auto-complete-editor.component';
import { TrcAutoCompleteModule } from '../trc-auto-complete/trc-auto-complete.module';
import { GridNorowOverlayComponent } from './grid-norow-overlay/grid-norow-overlay.component';

@NgModule({
    declarations: [
        AgGridBaseComponent,
        GridOverlayComponent,
        LookupListEditorComponent,
        DatepickerEditorComponent,
        InformationRendererComponent,
        TRCGridComponent,
        TextboxEditorComponent,
        GridTooltipComponent,
        ValueCellRendererComponent,
        CheckboxEditorComponent,
        CheckboxRenderer,
        MultiColLookupEditorComponent,
        AutoCompleteEditorComponent,
        GridNorowOverlayComponent
    ],
    imports: [CommonModule, AppMaterialModule, AgGridModule.withComponents([]), MatSnackBarModule, TrcAutoCompleteModule],
    exports: [AgGridModule, AgGridBaseComponent, TRCGridComponent, CommonModule],
    entryComponents: [AutoCompleteEditorComponent,GridNorowOverlayComponent, GridOverlayComponent, GridTooltipComponent, TextboxEditorComponent, ValueCellRendererComponent,CheckboxRenderer, CheckboxEditorComponent, LookupListEditorComponent, DatepickerEditorComponent, MultiColLookupEditorComponent]
})
export class AppAgGridModule {}
