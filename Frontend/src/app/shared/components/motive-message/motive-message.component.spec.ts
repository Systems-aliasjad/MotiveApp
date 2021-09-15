import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotiveMessageComponent } from './motive-message.component';

describe('MessageScreenComponent', () => {
  let component: MotiveMessageComponent;
  let fixture: ComponentFixture<MotiveMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MotiveMessageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotiveMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
