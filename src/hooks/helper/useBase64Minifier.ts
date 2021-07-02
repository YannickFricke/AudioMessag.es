import { pipe } from '../../helper/pipe';
import { useBase64 } from '../encoding/useBase64';
import { useString } from './useString';

export function useBase64Minifier() {
    const { minify } = useString();
    const { encode } = useBase64();

    const encodeObject = (o: any) => {
        console.log({o})
        return pipe(o, minify, encode);
    };

    return {
        encodeObject,
    };
}
