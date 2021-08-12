import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmisGridComponent } from './submis-grid.component';

describe('SubmisGridComponent', () => {
    let component: SubmisGridComponent;
    let fixture: ComponentFixture<SubmisGridComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SubmisGridComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SubmisGridComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
