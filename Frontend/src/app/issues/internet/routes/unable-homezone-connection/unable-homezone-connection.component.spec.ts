/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UnableHomezoneConnectionComponent } from './unable-homezone-connection.component';

describe('DeviceConnectedHomezoneComponent', () => {
  let component: UnableHomezoneConnectionComponent;
  let fixture: ComponentFixture<UnableHomezoneConnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UnableHomezoneConnectionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnableHomezoneConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
