import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupListEditorComponent } from './lookup-list-editor.component';

describe('LookupListEditorComponent', () => {
  let component: LookupListEditorComponent;
  let fixture: ComponentFixture<LookupListEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookupListEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupListEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
