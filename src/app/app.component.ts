import { Component, OnInit } from '@angular/core';
import { Color } from '@enums';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    fibonacciClockList: { [key: string]: number[][] } = {};
    selectedTime: string = '00:00';

    ngOnInit() {
        this.generateFibonacciClock();
    }

    public next() {
        const minute = +this.selectedTime.split(':')[1] + 5;
        const hour = (+this.selectedTime.split(':')[0] + Math.floor(minute / 60)) % 12;
        this.selectedTime = `${hour.toString().padStart(2, '0')}:${(minute % 60).toString().padStart(2, '0')}`;
    }

    public back() {
        const minute = +this.selectedTime.split(':')[1] - 5;
        const hour = (+this.selectedTime.split(':')[0] + Math.floor(minute / 60) + 12) % 12;
        this.selectedTime = `${hour.toString().padStart(2, '0')}:${((minute + 60) % 60).toString().padStart(2, '0')}`;
    }

    private generateFibonacciClock() {
        // Define the Fibonacci sequence up to 5
        const fibonacci = [1, 1, 2, 3, 5];

        // Generate all possible combinations of the Fibonacci numbers
        const combinations = this.getCombinations([Color.RED, Color.GREEN, Color.BLUE, Color.WHITE], 5);

        console.log('combinations', combinations);

        // Iterate over all combinations and check if they represent a valid time
        for (let combination of combinations) {
            let hourSum = 0;
            let minuteSum = 0;
            let blueSum = 0;
            for (let i = 0; i < 5; i++) {
                if (combination[i] === Color.RED || combination[i] === Color.BLUE) {
                    // Red square
                    hourSum += fibonacci[i];
                }
                if (combination[i] === Color.GREEN || combination[i] === Color.BLUE) {
                    // Green square
                    minuteSum += fibonacci[i];
                }
            }
            // Check if the time is valid (hours < 12, minutes < 60)
            if (hourSum < 12 && minuteSum < 12) {
                // Calculate the minutes and log the time
                const minutes = minuteSum * 5;
                const timeStr = `${hourSum.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
                if (this.fibonacciClockList[timeStr]?.length) {
                    this.fibonacciClockList[timeStr].push(combination);
                } else {
                    this.fibonacciClockList[timeStr] = [combination];
                }
            }
        }

        console.log(this.fibonacciClockList);
    }

    // Helper function to generate all combinations of an array with a given length
    private getCombinations(array: number[], length: number): number[][] {
        if (length === 1) {
            return array.map((item) => [item]);
        }
        const combinations = [];
        for (let i = 0; i < array.length; i++) {
            const suffixes = this.getCombinations(array, length - 1);
            for (let j = 0; j < suffixes.length; j++) {
                combinations.push([array[i], ...suffixes[j]]);
            }
        }
        return combinations;
    }
}
