import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankyouScreenComponent } from './thankyou-screen.component';

describe('ThankyouScreenComponent', () => {
  let component: ThankyouScreenComponent;
  let fixture: ComponentFixture<ThankyouScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankyouScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankyouScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
