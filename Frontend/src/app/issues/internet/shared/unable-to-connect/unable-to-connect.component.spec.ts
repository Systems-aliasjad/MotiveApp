/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UnableToConnectComponent } from './unable-to-connect.component';

describe('UnableToConnectComponent', () => {
  let component: UnableToConnectComponent;
  let fixture: ComponentFixture<UnableToConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnableToConnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnableToConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
