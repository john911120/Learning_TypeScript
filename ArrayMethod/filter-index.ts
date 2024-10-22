import {range} from './range';
const numbers: number[] = range(1, 11);
const half = numbers.length / 2;

let odd: number[] = numbers.filter((value,index) => index < half);
let add: number[] = numbers.filter((value,index) => index >= half);
console.log(odd, add);