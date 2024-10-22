import { range } from "./range";

let square: number[] = range(1, 6)
    .map((val: number) => val * val);
console.log(square);