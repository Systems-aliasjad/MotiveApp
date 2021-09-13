import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InternetIssuesDialogSecondComponent } from './internet-issues-dialog-second.component';

describe('InternetIssuesDialogSecondComponent', () => {
  let component: InternetIssuesDialogSecondComponent;
  let fixture: ComponentFixture<InternetIssuesDialogSecondComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InternetIssuesDialogSecondComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InternetIssuesDialogSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
