import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterPartyDetailComponent } from './counter-party-detail.component';

describe('CounterPartyDetailComponent', () => {
  let component: CounterPartyDetailComponent;
  let fixture: ComponentFixture<CounterPartyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterPartyDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterPartyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
