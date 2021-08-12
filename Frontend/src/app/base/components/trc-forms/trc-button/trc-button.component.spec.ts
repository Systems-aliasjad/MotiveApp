import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrcButtonComponent } from './trc-button.component';

describe('TrcButtonComponent', () => {
  let component: TrcButtonComponent;
  let fixture: ComponentFixture<TrcButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrcButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrcButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
