import {range} from './range';

let reduceSum: number = range(1, 101)
    .reduce((total : number, result : number) => total + result, 0);

console.log(reduceSum);