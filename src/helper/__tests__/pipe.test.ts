import { pipe } from '../pipe';

function toUpperCase(str: string): string {
    return str.toUpperCase();
}

describe('pipe', () => {
    it('should pipe through all given functions', () => {
        const initialValue = 'test';
        const expectedValue = 'TEST';

        const result = pipe<string, string>(initialValue, toUpperCase);

        expect(result).toBe(expectedValue);
    });
});
