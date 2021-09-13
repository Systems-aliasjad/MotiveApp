import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestartTvboxDialog } from './restart-tvbox-dialog.component';

describe('RestartTvboxDialog', () => {
  let component: RestartTvboxDialog;
  let fixture: ComponentFixture<RestartTvboxDialog>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [RestartTvboxDialog],
        imports: [IonicModule.forRoot()],
      }).compileComponents();

      fixture = TestBed.createComponent(RestartTvboxDialog);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
