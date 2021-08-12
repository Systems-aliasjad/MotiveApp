import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../core/app-material/app-material.module';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { OpenDialogComponent } from './components/open-dialog/open-dialog.component';
import { SearchGridComponent } from './components/search-grid/search-grid.component';
import { AppAgGridModule } from '../base/components/app-ag-grid/app-ag-grid.module';

@NgModule({
    declarations: [FileUploadComponent, OpenDialogComponent, SearchGridComponent],
    imports: [CommonModule, NgxDropzoneModule, AppMaterialModule, AppAgGridModule],
    exports: [AppMaterialModule, FileUploadComponent, SearchGridComponent],
    entryComponents: [FileUploadComponent, OpenDialogComponent],
})
export class SharedModule {}
