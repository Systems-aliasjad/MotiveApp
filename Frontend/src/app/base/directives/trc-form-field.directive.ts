import { Directive, Input, ComponentFactoryResolver, ViewContainerRef, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { TRCFormFieldMapper } from "../../mappers/trc-form-field.mapper";
@Directive({
    selector: "[trcFormFieldDirective]"
})
export class TRCFormFieldDirective implements OnInit {
    @Input() field: any;
    @Input() group: FormGroup;
    componentRef: any;
    constructor(
        private resolver: ComponentFactoryResolver,
        private container: ViewContainerRef
    ) { }
    ngOnInit() {
        const factory = this.resolver.resolveComponentFactory(TRCFormFieldMapper[this.field.type]);
        this.componentRef = this.container.createComponent(factory);
        this.componentRef.instance.field = this.field;
        this.componentRef.instance.group = this.group;
    }
}
