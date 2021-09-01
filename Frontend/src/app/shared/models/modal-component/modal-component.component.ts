import { Component, ComponentFactoryResolver, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DialogComponent } from '../dialogs/dialog/dialog.component';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() data: any = {
    heading: "Your password wasn't reset",
    content: "Please note that the issue won't be fixed until the password is changed and the router is configured with the new password",
    height: 300,
    html: '<h1 (click)="back()">Hello World!!!</h1>',
  };
  cFac: any;
  cRef: any;
  childLoaded: boolean = false;
  @ViewChild('template', { static: false, read: ViewContainerRef }) viewTemplate: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {}
  ngOnInit() {}

  ngAfterViewInit() {
    this.loadComponent();
  }

  loadComponent() {
    this.cFac = this.cfr.resolveComponentFactory(DialogComponent);
    this.cRef = this.viewTemplate.createComponent(this.cFac);
    this.cRef.instance.data = this.data;
    this.cRef.changeDetectorRef.detectChanges();
  }
}
