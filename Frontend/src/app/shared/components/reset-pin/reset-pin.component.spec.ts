/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResetPinComponent } from './reset-pin.component';

describe('ResetPinComponent', () => {
  let component: ResetPinComponent;
  let fixture: ComponentFixture<ResetPinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResetPinComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
