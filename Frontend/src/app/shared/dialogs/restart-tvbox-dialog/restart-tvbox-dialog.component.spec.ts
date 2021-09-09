import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestartTvboxDialogComponent } from './restart-tvbox-dialog.component';

describe('RestartTvboxDialogComponent', () => {
  let component: RestartTvboxDialogComponent;
  let fixture: ComponentFixture<RestartTvboxDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RestartTvboxDialogComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestartTvboxDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
