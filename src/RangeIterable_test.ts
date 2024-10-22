import { RangeIterable } from "./RangeIterable";
const iterator = new RangeIterable(1, 5);

for(let value of iterator) 
    console.log(value);