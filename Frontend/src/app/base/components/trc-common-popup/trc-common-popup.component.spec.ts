import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TRCCommonPopupComponent } from './trc-common-popup.component';

describe('TRCCommonPopupComponent', () => {
  let component: TRCCommonPopupComponent;
  let fixture: ComponentFixture<TRCCommonPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TRCCommonPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TRCCommonPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
