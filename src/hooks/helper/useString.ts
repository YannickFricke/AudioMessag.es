import { pipe } from '../../helper/pipe';

const textDecoder = new TextDecoder();

export function useString(minifyLength: number = 500) {
    const encode = (c: string) => {
        var x = 'charCodeAt',
            b,
            e = {},
            f = c.split(''),
            d = [],
            a = f[0],
            g = 256;
        for (b = 1; b < f.length; b++)
            (c = f[b]),
                // @ts-ignore
                null != e[a + c]
                    ? (a += c)
                    : // @ts-ignore
                      (d.push(1 < a.length ? e[a] : a[x](0)),
                      // @ts-ignore
                      (e[a + c] = g),
                      g++,
                      (a = c));
        // @ts-ignore
        d.push(1 < a.length ? e[a] : a[x](0));
        for (b = 0; b < d.length; b++) d[b] = String.fromCharCode(d[b]);
        return d.join('');
    };
    const decode = (b: string) => {
        var a,
            e = {},
            d = b.split(''),
            f,
            c = (f = d[0]),
            g = [c],
            o,
            h = (o = 256);
        // @ts-ignore
        for (b = 1; b < d.length; b++)
            // @ts-ignore
            (a = d[b].charCodeAt(0)),
                // @ts-ignore
                (a = h > a ? d[b] : e[a] ? e[a] : f + c),
                g.push(a),
                (c = a.charAt(0)),
                // @ts-ignore
                (e[o] = f + c),
                // @ts-ignore
                o++,
                // @ts-ignore
                (f = a);
        return g.join('');
    };

    const minify = (
        audioString: string,
        round: number = 1,
    ): { encodedAudio: string; rounds: number } => {
        // @ts-ignore
        // let encodedAudio = textDecoder.decode(encode(audioString));

        let encodedAudio = pipe<string, string>(
            audioString,
            encode,
            textDecoder.decode.bind(textDecoder),
        );

        if (encodedAudio.length > minifyLength) {
            console.log(
                'Minifying string',
                encodedAudio.length,
                `because it has more than ${minifyLength} characters`,
            );

            return minify(encodedAudio, round + 1);
        }

        console.log(
            'Found suitable string:',
            encodedAudio,
            'with rounds:',
            round,
        );

        return {
            encodedAudio,
            rounds: round,
        };
    };

    return {
        encode,
        decode,
        minify,
    };
}
