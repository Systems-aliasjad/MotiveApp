import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrcTextareaComponent } from './trc-textarea.component';

describe('TrcTextareaComponent', () => {
  let component: TrcTextareaComponent;
  let fixture: ComponentFixture<TrcTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrcTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrcTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
