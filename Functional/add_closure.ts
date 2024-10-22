export type NumberToNumberFunction = (arg0 : number) => number;
export const adding = (a : number): NumberToNumberFunction => {
    const _adding: NumberToNumberFunction = (b: number): number =>
        { 
            return a + b;
        }
        return _adding;
}