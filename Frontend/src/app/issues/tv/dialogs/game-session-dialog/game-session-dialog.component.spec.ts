/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GameSessionDialog } from './game-session-dialog.component';

describe('GameSessionDialog', () => {
  let component: GameSessionDialog;
  let fixture: ComponentFixture<GameSessionDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameSessionDialog],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSessionDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
