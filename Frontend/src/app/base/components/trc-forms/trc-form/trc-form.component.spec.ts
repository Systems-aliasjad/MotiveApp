import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrcFormComponent } from './trc-form.component';

describe('TrcFormComponent', () => {
  let component: TrcFormComponent;
  let fixture: ComponentFixture<TrcFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrcFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrcFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
