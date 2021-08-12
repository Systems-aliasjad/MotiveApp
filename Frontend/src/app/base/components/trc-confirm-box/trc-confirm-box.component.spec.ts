import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TRCConfirmBoxComponent } from './trc-confirm-box.component';

describe('ConfirmationBoxComponent', () => {
    let component: TRCConfirmBoxComponent;
    let fixture: ComponentFixture<TRCConfirmBoxComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TRCConfirmBoxComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TRCConfirmBoxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
