/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IssueListDialog } from './issue-list-dialog.component';

describe('IssueListDialog', () => {
  let component: IssueListDialog;
  let fixture: ComponentFixture<IssueListDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IssueListDialog],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueListDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
