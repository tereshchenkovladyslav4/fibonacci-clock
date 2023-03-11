import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibonacciClockComponent } from './fibonacci-clock.component';
import { ColorPipe } from '@pipes';
import { Color } from '@enums';

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

    it('should display updated title after detectChanges', () => {
        component.fibonacciArray = [Color.RED, Color.BLUE, Color.GREEN, Color.WHITE, Color.RED];
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(getComputedStyle(compiled.querySelector('.rect-1')).getPropertyValue('background-color')).toContain(
            'rgb(255, 0, 0)',
        );
        expect(getComputedStyle(compiled.querySelector('.rect-2')).getPropertyValue('background-color')).toContain(
            'rgb(0, 0, 255)',
        );
        expect(getComputedStyle(compiled.querySelector('.rect-3')).getPropertyValue('background-color')).toContain(
            'rgb(0, 128, 0)',
        );
        expect(getComputedStyle(compiled.querySelector('.rect-4')).getPropertyValue('background-color')).toContain(
            'rgb(255, 255, 255)',
        );
        expect(getComputedStyle(compiled.querySelector('.rect-5')).getPropertyValue('background-color')).toContain(
            'rgb(255, 0, 0)',
        );
    });
});
