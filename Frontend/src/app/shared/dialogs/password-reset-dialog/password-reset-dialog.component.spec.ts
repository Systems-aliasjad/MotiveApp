/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PasswordResetDialog } from './password-reset-dialog.component';

describe('PasswordResetDialog', () => {
  let component: PasswordResetDialog;
  let fixture: ComponentFixture<PasswordResetDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordResetDialog],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordResetDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
