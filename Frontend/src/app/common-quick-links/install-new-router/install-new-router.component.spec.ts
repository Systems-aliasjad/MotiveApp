/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InstallNewRouterComponent } from './install-new-router.component';

describe('PackageAvailableComponent', () => {
  let component: InstallNewRouterComponent;
  let fixture: ComponentFixture<InstallNewRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InstallNewRouterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallNewRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
