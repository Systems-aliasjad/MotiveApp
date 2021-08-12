import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterPartyBankAccountComponent } from './counter-party-bank-account.component';

describe('CounterPartyBankAccountComponent', () => {
  let component: CounterPartyBankAccountComponent;
  let fixture: ComponentFixture<CounterPartyBankAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterPartyBankAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterPartyBankAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
