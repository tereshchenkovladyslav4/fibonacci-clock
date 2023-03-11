import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-fibonacci-clock',
    templateUrl: './fibonacci-clock.component.html',
    styleUrls: ['./fibonacci-clock.component.scss'],
})
export class FibonacciClockComponent {
    @Input() fibonacciArray: number[] = [];
}
