import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrcGridSearchComponent } from './trc-grid-search.component';

describe('TrcGridSearchComponent', () => {
  let component: TrcGridSearchComponent;
  let fixture: ComponentFixture<TrcGridSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrcGridSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrcGridSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
