import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '@enums';

@Pipe({
    name: 'color',
})
export class ColorPipe implements PipeTransform {
    transform(value: Color): string {
        switch (value) {
            case Color.RED: {
                return 'red';
            }
            case Color.GREEN: {
                return 'green';
            }
            case Color.BLUE: {
                return 'blue';
            }
            default: {
                return 'white';
            }
        }
    }
}
