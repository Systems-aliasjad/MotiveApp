import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuickHomeZoneResetWifiComponent } from './quick-home-zone-reset-wifi.component';

describe('QuickHomeZoneResetWifiComponent', () => {
  let component: QuickHomeZoneResetWifiComponent;
  let fixture: ComponentFixture<QuickHomeZoneResetWifiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickHomeZoneResetWifiComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuickHomeZoneResetWifiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
