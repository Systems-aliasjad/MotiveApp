import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterPartyInformationComponent } from './counter-party-information.component';

describe('CounterPartyInformationComponent', () => {
  let component: CounterPartyInformationComponent;
  let fixture: ComponentFixture<CounterPartyInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterPartyInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterPartyInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
