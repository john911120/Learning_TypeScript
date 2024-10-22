import { FirstOrderFunction, SecondOrderFunction, ThirdOrderFunction } from "./function-signiture";

export const add_triple: ThirdOrderFunction<number, number> = (n: number) : SecondOrderFunction<number, number> =>
    (o: number): FirstOrderFunction<number, number> =>
    (p: number): number => n + o + p;