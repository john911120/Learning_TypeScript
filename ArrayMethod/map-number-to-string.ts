import { range } from "./range";

let square: string[] = range(1, 6)
    .map((val, idx) => `[${idx}]: ${val}`);
console.log(square);