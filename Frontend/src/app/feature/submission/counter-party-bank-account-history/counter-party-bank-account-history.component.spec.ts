import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterPartyBankAccountHistoryComponent } from './counter-party-bank-account-history.component';

describe('CounterPartyBankAccountHistoryComponent', () => {
  let component: CounterPartyBankAccountHistoryComponent;
  let fixture: ComponentFixture<CounterPartyBankAccountHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterPartyBankAccountHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterPartyBankAccountHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
