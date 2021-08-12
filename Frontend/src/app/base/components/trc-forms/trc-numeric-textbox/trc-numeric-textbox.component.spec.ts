import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrcNumericTextboxComponent } from './trc-numeric-textbox.component';

describe('TrcNumericTextboxComponent', () => {
  let component: TrcNumericTextboxComponent;
  let fixture: ComponentFixture<TrcNumericTextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrcNumericTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrcNumericTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
