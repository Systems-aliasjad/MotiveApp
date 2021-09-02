/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InternetIssueListDialog } from './internet-issue-list-dialog.component';

describe('InternetIssueListDialog', () => {
  let component: InternetIssueListDialog;
  let fixture: ComponentFixture<InternetIssueListDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InternetIssueListDialog],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternetIssueListDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
