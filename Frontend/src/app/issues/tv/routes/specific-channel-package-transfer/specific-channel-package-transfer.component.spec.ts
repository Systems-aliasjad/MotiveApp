import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpecificChannelPackageTransferComponent } from './specific-channel-package-transfer.component';

describe('SpecificChannelPackageTransferComponent', () => {
  let component: SpecificChannelPackageTransferComponent;
  let fixture: ComponentFixture<SpecificChannelPackageTransferComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificChannelPackageTransferComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpecificChannelPackageTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
