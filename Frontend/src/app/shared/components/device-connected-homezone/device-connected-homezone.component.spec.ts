/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DeviceConnectedHomezoneComponent } from './device-connected-homezone.component';

describe('DeviceConnectedHomezoneComponent', () => {
  let component: DeviceConnectedHomezoneComponent;
  let fixture: ComponentFixture<DeviceConnectedHomezoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceConnectedHomezoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceConnectedHomezoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
