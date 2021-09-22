import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForgotCcbPinComponent } from './ccb-pin-reset-form.component';

describe('ForgotCcbPinComponent', () => {
  let component: ForgotCcbPinComponent;
  let fixture: ComponentFixture<ForgotCcbPinComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ForgotCcbPinComponent],
        imports: [IonicModule.forRoot()],
      }).compileComponents();

      fixture = TestBed.createComponent(ForgotCcbPinComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
