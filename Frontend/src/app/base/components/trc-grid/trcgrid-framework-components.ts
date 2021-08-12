import { GridOverlayComponent } from '../app-ag-grid/grid-overlay/grid-overlay.component';
import { LookupListEditorComponent } from '../app-ag-grid/ag-grid-framework-components/lookup-list-editor/lookup-list-editor.component';
import { DatepickerEditorComponent } from '../app-ag-grid/ag-grid-framework-components/datepicker-editor/datepicker-editor.component';
import { InformationRendererComponent } from '../app-ag-grid/ag-grid-framework-components/information-renderer/information-renderer.component';
import { TextboxEditorComponent } from '../app-ag-grid/ag-grid-framework-components/textbox-editor/TextboxEditorComponent';
import { GridTooltipComponent } from '../app-ag-grid/ag-grid-framework-components/grid-tooltip/grid-tooltip.component';
import { ValueCellRendererComponent } from '../app-ag-grid/ag-grid-framework-components/value-cell-renderer/value-cell-renderer.component';
import { CheckboxRenderer } from '../app-ag-grid/ag-grid-framework-components/checkBoxRenderer';
import { CheckboxEditorComponent } from '../app-ag-grid/ag-grid-framework-components/checkbox-editor/checkbox-editor.component';
import { GridOptions, IGetRowsParams } from 'ag-grid-community';
import { MultiColLookupEditorComponent } from '../app-ag-grid/ag-grid-framework-components/multi-col-lookup-editor/multi-col-lookup-editor.component';
import { AutoCompleteEditorComponent } from '../app-ag-grid/ag-grid-framework-components/auto-complete-editor/auto-complete-editor.component';
import { GridNorowOverlayComponent } from '../app-ag-grid/grid-norow-overlay/grid-norow-overlay.component';

export var TRCGridFrameworkComponents = {
    GridNorowOverlayComponent: GridNorowOverlayComponent,
    GridOverlayComponent: GridOverlayComponent,
    LookupListEditorComponent: LookupListEditorComponent,
    MultiColLookupListEditorComponent: MultiColLookupEditorComponent,
    DatepickerEditorComponent: DatepickerEditorComponent,
    InformationRendererComponent: InformationRendererComponent,
    TextboxEditorComponent: TextboxEditorComponent,
    GridTooltipComponent: GridTooltipComponent,
    ValueCellRendererComponent: ValueCellRendererComponent,
    checkboxRenderer: CheckboxRenderer,
    CheckboxEditorComponent: CheckboxEditorComponent,
    AutoCompleteEditorComponent: AutoCompleteEditorComponent,
};
