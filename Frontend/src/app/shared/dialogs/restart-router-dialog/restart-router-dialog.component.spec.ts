/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RestartRouterDialog } from './restart-router-dialog.component';

describe('RestartRouterDialog', () => {
  let component: RestartRouterDialog;
  let fixture: ComponentFixture<RestartRouterDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RestartRouterDialog],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestartRouterDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
