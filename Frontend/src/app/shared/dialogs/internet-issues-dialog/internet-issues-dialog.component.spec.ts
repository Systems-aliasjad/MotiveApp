/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InternetIssuesDialog } from './internet-issues-dialog.component';

describe('InternetIssuesDialog', () => {
  let component: InternetIssuesDialog;
  let fixture: ComponentFixture<InternetIssuesDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InternetIssuesDialog],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternetIssuesDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
