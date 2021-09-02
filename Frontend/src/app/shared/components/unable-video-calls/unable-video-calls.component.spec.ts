/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UnableVideoCallsComponent } from './unable-video-calls.component';

describe('UnableVideoCallsComponent', () => {
  let component: UnableVideoCallsComponent;
  let fixture: ComponentFixture<UnableVideoCallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnableVideoCallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnableVideoCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
