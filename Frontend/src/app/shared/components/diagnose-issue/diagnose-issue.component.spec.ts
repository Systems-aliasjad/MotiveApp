import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiagnoseIssueComponent } from './diagnose-issue.component';

describe('DiagnoseIssueComponent', () => {
  let component: DiagnoseIssueComponent;
  let fixture: ComponentFixture<DiagnoseIssueComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnoseIssueComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiagnoseIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
