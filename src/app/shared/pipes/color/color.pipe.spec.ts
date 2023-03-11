import { ColorPipe } from './color.pipe';
import { Color } from '@enums';

describe('ColorPipe', () => {
    it('create an instance', () => {
        const pipe = new ColorPipe();
        expect(pipe).toBeTruthy();
    });

    it('transforms "0" to "red"', () => {
        const pipe = new ColorPipe();
        expect(pipe.transform(Color.RED)).toBe('red');
    });

    it('transforms "1" to "green"', () => {
        const pipe = new ColorPipe();
        expect(pipe.transform(Color.GREEN)).toBe('green');
    });

    it('transforms "2" to "blue"', () => {
        const pipe = new ColorPipe();
        expect(pipe.transform(Color.BLUE)).toBe('blue');
    });

    it('transforms "3" to "white"', () => {
        const pipe = new ColorPipe();
        expect(pipe.transform(Color.WHITE)).toBe('white');
    });
});
