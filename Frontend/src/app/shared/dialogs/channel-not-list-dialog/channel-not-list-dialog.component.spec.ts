import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChannelNotListDialogComponent } from './channel-not-list-dialog.component';

describe('ChannelNotListDialogComponent', () => {
  let component: ChannelNotListDialogComponent;
  let fixture: ComponentFixture<ChannelNotListDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelNotListDialogComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChannelNotListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
