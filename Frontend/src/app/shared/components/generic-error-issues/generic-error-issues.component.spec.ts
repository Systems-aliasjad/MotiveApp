import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenericErrorIssuesComponent } from './generic-error-issues.component';

describe('GenericErrorIssuesComponent', () => {
  let component: GenericErrorIssuesComponent;
  let fixture: ComponentFixture<GenericErrorIssuesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericErrorIssuesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GenericErrorIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
