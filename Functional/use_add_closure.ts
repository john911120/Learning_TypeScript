import { NumberToNumberFunction, adding } from "./add_closure";

let fn : NumberToNumberFunction = adding(700);

let result = fn(41);
console.log(result);
console.log(adding(700)(42));