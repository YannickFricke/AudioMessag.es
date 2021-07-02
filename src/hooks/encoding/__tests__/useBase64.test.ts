import { useBase64 } from '../useBase64';

describe('useBase64', () => {
    const testString = 'test';
    const encodedTestString = 'dGVzdA==';

    it('should be defined', () => {
        expect(useBase64).toBeDefined();
    });

    it('should encode data using base64', () => {
        const { encode } = useBase64();
        const result = encode(testString);

        expect(result).toBe(encodedTestString);
    });

    it('should decode data using base64', () => {
        const { decode } = useBase64();
        const result = decode(encodedTestString);

        expect(result).toBe(testString);
    });
});
