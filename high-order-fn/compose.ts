/* export const compose = <T, R>(...functions: readonly Function[]): Function => (x:T): (T) => R => {
    const deepCopiedFunction = [...functions];
    return deepCopiedFunction.reverse().reduce((value, func) => func(value), x);
} */
      export const compose = <T>(...functions: Array<(arg: T) => T>): (x: T) => T => {
        return (x: T): T => {
            return functions.reverse().reduce((value, func) => func(value), x);
        };
    };


