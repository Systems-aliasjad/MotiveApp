import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrcAutoCompleteComponent } from './trc-auto-complete.component';

describe('TrcAutoCompleteComponent', () => {
  let component: TrcAutoCompleteComponent;
  let fixture: ComponentFixture<TrcAutoCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrcAutoCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrcAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
