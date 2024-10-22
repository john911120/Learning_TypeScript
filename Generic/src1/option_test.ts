import { Option } from "./option";

let m = Option.some(741);
let value : number = m.map(value => value + 1).getOrElse(741);
console.log(value);

let n = Option.None;
let value1 : number = n.map(value => value1 + 1).getOrElse(0) as number;
console.log(value1);