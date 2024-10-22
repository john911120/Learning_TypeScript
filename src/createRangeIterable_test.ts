import { createRangeIterable } from "./createRangeIterable";

const iterator = createRangeIterable(1, 5);
while(true) {
    const {value, done} = iterator.next();
    if(done) break;
    console.log(value);
}