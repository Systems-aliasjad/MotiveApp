import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrcCurrencyTextboxComponent } from './trc-currency-textbox.component';

describe('TrcCurrencyTextboxComponent', () => {
  let component: TrcCurrencyTextboxComponent;
  let fixture: ComponentFixture<TrcCurrencyTextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrcCurrencyTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrcCurrencyTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
