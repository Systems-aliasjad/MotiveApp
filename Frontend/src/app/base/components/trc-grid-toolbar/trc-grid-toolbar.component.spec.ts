import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrcGridToolbarComponent } from './trc-grid-toolbar.component';

describe('TrcGridToolbarComponent', () => {
  let component: TrcGridToolbarComponent;
  let fixture: ComponentFixture<TrcGridToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrcGridToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrcGridToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
