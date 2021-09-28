import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstallEtisalatRouterDialogComponent } from './install-etisalat-router-dialog.component';

describe('InstallEtisalatRouterDialogComponent', () => {
  let component: InstallEtisalatRouterDialogComponent;
  let fixture: ComponentFixture<InstallEtisalatRouterDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallEtisalatRouterDialogComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstallEtisalatRouterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
