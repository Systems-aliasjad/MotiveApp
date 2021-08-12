import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiColLookupEditorComponent } from './multi-col-lookup-editor.component';

describe('MultiColLookupEditorComponent', () => {
  let component: MultiColLookupEditorComponent;
  let fixture: ComponentFixture<MultiColLookupEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiColLookupEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiColLookupEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
