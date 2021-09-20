import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MotiveMessageBulletComponent } from './motive-message-bullet.component';

describe('MotiveMessageBulletComponent', () => {
  let component: MotiveMessageBulletComponent;
  let fixture: ComponentFixture<MotiveMessageBulletComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MotiveMessageBulletComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MotiveMessageBulletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
