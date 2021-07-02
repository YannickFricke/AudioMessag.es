import { useString } from '../useString';

describe('useString', () => {
    it('should be defined', () => {
        expect(useString).toBeDefined();
    });

    describe('encoding / decoding strings', () => {
        const input = 'test aöaksjföalksdjf ölaskdjf öalskdjfö';
        const output = 'test aöaksjfĆlĈdĊ ölaskďfđalĕėö';

        it('should be able to encode strings', () => {
            const { encode } = useString();

            const result = encode(input);

            expect(result).toBe(output);
        });

        it('should be able to decode strings', () => {
            const { decode } = useString();

            const result = decode(output);

            expect(result).toBe(input);
        });
    });
});
