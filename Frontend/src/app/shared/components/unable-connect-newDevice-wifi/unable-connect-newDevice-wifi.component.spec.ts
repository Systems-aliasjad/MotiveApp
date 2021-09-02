/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UnableConnectNewDeviceWifiComponent } from './unable-connect-newDevice-wifi.component';

describe('UnableConnectNewDeviceWifiComponent', () => {
  let component: UnableConnectNewDeviceWifiComponent;
  let fixture: ComponentFixture<UnableConnectNewDeviceWifiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnableConnectNewDeviceWifiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnableConnectNewDeviceWifiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
