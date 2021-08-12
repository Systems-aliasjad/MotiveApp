import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxEditorComponent } from './textbox-editor.component';

describe('TextboxEditorComponent', () => {
  let component: TextboxEditorComponent;
  let fixture: ComponentFixture<TextboxEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextboxEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextboxEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
