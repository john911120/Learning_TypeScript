import { FirstOrderFunction, SecondOrderFunction } from "./function-signiture";

export const add: SecondOrderFunction<number, number> = (n: number) : FirstOrderFunction<number, number> =>
    (o: number): number => n + o;