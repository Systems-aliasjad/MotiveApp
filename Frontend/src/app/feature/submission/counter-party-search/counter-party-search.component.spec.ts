import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterPartySearchComponent } from './counter-party-search.component';

describe('CounterPartySearchComponent', () => {
  let component: CounterPartySearchComponent;
  let fixture: ComponentFixture<CounterPartySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterPartySearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterPartySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
