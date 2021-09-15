/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RestartInstructionComponent } from './restart-instruction.component';

describe('RouterRestartComponent', () => {
  let component: RestartInstructionComponent;
  let fixture: ComponentFixture<RestartInstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RestartInstructionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestartInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
