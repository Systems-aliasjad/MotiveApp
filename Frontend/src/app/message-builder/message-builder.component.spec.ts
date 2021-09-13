import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBuilderComponent } from './message-builder.component';

describe('MessageBuilderComponent', () => {
  let component: MessageBuilderComponent;
  let fixture: ComponentFixture<MessageBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
