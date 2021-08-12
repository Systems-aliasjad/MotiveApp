import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueCellRendererComponent } from './value-cell-renderer.component';

describe('ValueCellRendererComponent', () => {
  let component: ValueCellRendererComponent;
  let fixture: ComponentFixture<ValueCellRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueCellRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
