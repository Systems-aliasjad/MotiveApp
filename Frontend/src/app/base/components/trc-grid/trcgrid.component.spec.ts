import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TRCGridComponent } from './trcgrid.component';

describe('TRCGridComponent', () => {
  let component: TRCGridComponent;
  let fixture: ComponentFixture<TRCGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TRCGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TRCGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
