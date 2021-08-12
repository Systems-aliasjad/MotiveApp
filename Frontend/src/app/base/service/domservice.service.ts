import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, ComponentRef, EmbeddedViewRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DomserviceService {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
) { }

createComponentRef(component: any): ComponentRef<any> {
    const componentRef = this.componentFactoryResolver
        .resolveComponentFactory(component)
        .create(this.injector);
    this.appRef.attachView(componentRef.hostView);
    return componentRef;
}

getDomElementFromComponentRef(componentRef: ComponentRef<any>): HTMLElement {
    return (componentRef.hostView as EmbeddedViewRef<any>)
        .rootNodes[0] as HTMLElement;
}

addChild(child: HTMLElement, parent: HTMLElement = document.body) {
    parent.appendChild(child);
}

destroyRef(componentRef: ComponentRef<any>) {
  this.appRef.detachView(componentRef.hostView);
  componentRef.destroy();
}

setDynamicStyles(styles: object, componentRef: ComponentRef<any>) {
  Object.keys(styles).forEach(cssRule => {
    let cssValue = styles[cssRule];
    componentRef.instance.renderer.setElementStyle(
            componentRef.instance.elementRef.nativeElement,
            cssRule,
            cssValue
        );
  });
}
}
