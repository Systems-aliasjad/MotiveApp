import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhoneIssuesProblemValueAddedComponent } from './phone-issues-problem-value-added.component';

describe('PhoneIssuesProblemValueAddedComponent', () => {
  let component: PhoneIssuesProblemValueAddedComponent;
  let fixture: ComponentFixture<PhoneIssuesProblemValueAddedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneIssuesProblemValueAddedComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhoneIssuesProblemValueAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
