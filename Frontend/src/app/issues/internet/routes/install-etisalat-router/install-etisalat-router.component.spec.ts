import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstallEtisalatRouterComponent } from './install-etisalat-router.component';

describe('InstallEtisalatRouterComponent', () => {
  let component: InstallEtisalatRouterComponent;
  let fixture: ComponentFixture<InstallEtisalatRouterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallEtisalatRouterComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstallEtisalatRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
