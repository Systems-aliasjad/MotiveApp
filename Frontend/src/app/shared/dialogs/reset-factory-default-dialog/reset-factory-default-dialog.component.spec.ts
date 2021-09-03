/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResetFactoryDefaultDialog } from './reset-factory-default-dialog.component';

describe('ResetFactoryDefaultDialog', () => {
  let component: ResetFactoryDefaultDialog;
  let fixture: ComponentFixture<ResetFactoryDefaultDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResetFactoryDefaultDialog],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetFactoryDefaultDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
