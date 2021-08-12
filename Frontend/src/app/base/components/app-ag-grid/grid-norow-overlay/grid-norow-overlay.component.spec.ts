import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridNorowOverlayComponent } from './grid-norow-overlay.component';

describe('GridNorowOverlayComponent', () => {
  let component: GridNorowOverlayComponent;
  let fixture: ComponentFixture<GridNorowOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridNorowOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridNorowOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
