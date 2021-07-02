export function pipe<T, U>(o: T, ...functions: Array<Function>): U {
    return functions.reduce((acc: T | any, func) => {
        return func(acc) as U;
    }, o);
}
