import { range } from "./range";
import { fold } from "./folding";
import { map } from "./map";

let numbers : number[] = range(1, 101)
let result = fold(map(numbers, value => value * value), (result, value) => result + value, 0);
console.log(result);