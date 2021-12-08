import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnknownErrorComesComponent } from './unknown-error-comes.component';

describe('UnknownErrorComesComponent', () => {
  let component: UnknownErrorComesComponent;
  let fixture: ComponentFixture<UnknownErrorComesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UnknownErrorComesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnknownErrorComesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
