import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrcToolbarComponent } from './trc-toolbar.component';

describe('TrcGridToolbarComponent', () => {
  let component: TrcToolbarComponent;
  let fixture: ComponentFixture<TrcToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrcToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrcToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
