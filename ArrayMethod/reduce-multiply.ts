import { range } from "./range";

let reduceSum: number = range(1, 11)
    .reduce((total: number, valu: number) => total * valu, 1);

console.log(reduceSum);