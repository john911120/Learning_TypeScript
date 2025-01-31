import { range } from "./range";
import { fold } from "./folding";
import { filter } from "./filters";

let numbers : number[] = range(1, 101)
const isEven = (n:number): boolean => n % 2 == 0;
let result = fold(filter(numbers, isEven), (result, value) => result + value, 0);
console.log(result);