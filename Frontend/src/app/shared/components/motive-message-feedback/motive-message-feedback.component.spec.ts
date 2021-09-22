import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MotiveMessageFeedbackComponent } from './motive-message-feedback.component';

describe('MotiveMessageFeedbackComponent', () => {
  let component: MotiveMessageFeedbackComponent;
  let fixture: ComponentFixture<MotiveMessageFeedbackComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MotiveMessageFeedbackComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MotiveMessageFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
