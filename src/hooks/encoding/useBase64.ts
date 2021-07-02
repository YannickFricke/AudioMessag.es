export function useBase64() {
    const encode = (input: any) => btoa(input);

    const decode = (input: string) => atob(input);

    return {
        encode,
        decode,
    };
}
