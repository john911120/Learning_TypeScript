import {range} from './range';
const numbers: number[] = range(1, 11);

let odd: number[] = numbers.filter((value) => value % 2 != 0);
let add: number[] = numbers.filter((value) => value % 2 == 0);
console.log(odd, add);