import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrcMultiColLookupComponent } from './trc-multi-col-lookup.component';

describe('TrcMultiColLookupComponent', () => {
  let component: TrcMultiColLookupComponent;
  let fixture: ComponentFixture<TrcMultiColLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrcMultiColLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrcMultiColLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
