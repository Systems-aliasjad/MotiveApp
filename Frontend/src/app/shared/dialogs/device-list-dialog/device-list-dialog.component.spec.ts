/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DeviceListDialog } from './device-list-dialog.component';

describe('DeviceListDialog', () => {
  let component: DeviceListDialog;
  let fixture: ComponentFixture<DeviceListDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeviceListDialog],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceListDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
