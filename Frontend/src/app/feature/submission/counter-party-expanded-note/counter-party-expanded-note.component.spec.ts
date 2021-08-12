import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterPartyExpandedNoteComponent } from './counter-party-expanded-note.component';

describe('CounterPartyExpandedNoteComponent', () => {
  let component: CounterPartyExpandedNoteComponent;
  let fixture: ComponentFixture<CounterPartyExpandedNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterPartyExpandedNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterPartyExpandedNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
