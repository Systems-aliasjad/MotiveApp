/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RouterRestartComponent } from './router-restart.component';

describe('RouterRestartComponent', () => {
  let component: RouterRestartComponent;
  let fixture: ComponentFixture<RouterRestartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterRestartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterRestartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
