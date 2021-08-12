import {
    Component,
    OnInit,
    ViewChild,
    ComponentFactoryResolver,
    Inject,
    AfterViewInit,
    ElementRef,
    ViewContainerRef,
    OnDestroy,
    ChangeDetectorRef,
    AfterViewChecked
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'trc-common-popup',
    templateUrl: './trc-common-popup.component.html',
    styleUrls: ['./trc-common-popup.component.css']
})
export class TRCCommonPopupComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {
    @ViewChild('appPopupContent', { read: ViewContainerRef }) appPopupContent: ViewContainerRef;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        public viewContainerRef: ViewContainerRef,
        private cdRef: ChangeDetectorRef,
        public dialogRef: MatDialogRef<any>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

    ngOnInit() {}

    ngAfterViewInit(): void {
        this.data.actionButtons = this.data.actionButtons || [] ;
        this.data.popupHeaderClasses = this.data.popupHeaderClasses || ['common-popup-header-class'];
        this.data.popupBodyClasses = this.data.popupBodyClasses || ['common-popup-body-class'];
        this.data.popupFooterClasses = this.data.popupFooterClasses || ['common-popup-footer-class'];
        this.data.dailogRef = this.dialogRef;
        if (this.data && this.data.contentComponent) {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.data.contentComponent);
            const componentRef = this.appPopupContent.createComponent<any>(componentFactory);
            componentRef.instance.data = this.data;
            componentRef.instance.fields = this.data.fields;
            // componentRef.changeDetectorRef.detectChanges();
        }
    }
    ngAfterViewChecked(): void {
        this.cdRef.detectChanges();
    }
    onEvent($event, type) {
        this.data.onAction({
            event: $event,
            type: type
        });
    }

    ngOnDestroy() {}
}
