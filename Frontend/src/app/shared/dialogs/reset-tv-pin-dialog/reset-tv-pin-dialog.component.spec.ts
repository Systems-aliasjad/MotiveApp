import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResetTvPinDialog } from './reset-tv-pin-dialog.component';

describe('ResetTvPinDialog', () => {
  let component: ResetTvPinDialog;
  let fixture: ComponentFixture<ResetTvPinDialog>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ResetTvPinDialog],
        imports: [IonicModule.forRoot()],
      }).compileComponents();

      fixture = TestBed.createComponent(ResetTvPinDialog);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
