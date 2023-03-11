import { Component } from '@angular/core';
import { FibonacciClockService } from '@services';
import { environment } from '@env/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = environment.title;

    constructor(public fibonacciClockService: FibonacciClockService) {}
}
