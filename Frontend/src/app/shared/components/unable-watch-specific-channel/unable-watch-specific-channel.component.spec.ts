import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnableWatchSpecificChannelComponent } from './unable-watch-specific-channel.component';

describe('UnableWatchSpecificChannelComponent', () => {
  let component: UnableWatchSpecificChannelComponent;
  let fixture: ComponentFixture<UnableWatchSpecificChannelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UnableWatchSpecificChannelComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnableWatchSpecificChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
