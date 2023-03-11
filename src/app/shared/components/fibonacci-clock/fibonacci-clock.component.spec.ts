import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibonacciClockComponent } from './fibonacci-clock.component';
import { ColorPipe } from '@pipes';

describe('FibonacciClockComponent', () => {
    let component: FibonacciClockComponent;
    let fixture: ComponentFixture<FibonacciClockComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FibonacciClockComponent, ColorPipe],
        }).compileComponents();

        fixture = TestBed.createComponent(FibonacciClockComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
