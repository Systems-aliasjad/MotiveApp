import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCompleteEditorComponent } from './auto-complete-editor.component';

describe('AutoCompleteEditorComponent', () => {
  let component: AutoCompleteEditorComponent;
  let fixture: ComponentFixture<AutoCompleteEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoCompleteEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCompleteEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
