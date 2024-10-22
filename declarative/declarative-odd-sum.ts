import { range } from "./range";
import { fold } from "./folding";
import { filter } from "./filters";

let numbers : number[] = range(1, 101)
const isOdd = (n:number): boolean => n % 2!== 0;
let result = fold(filter(numbers, isOdd), (result, value) => result + value, 0);
console.log(result);