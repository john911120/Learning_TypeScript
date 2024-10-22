import { Cal } from "./method-chaining";

let cal = new Cal;
let result = cal.plus(5).minus(3).multiply(2).divide(4).value;
console.log(result);