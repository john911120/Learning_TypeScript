import { rangeGenerator } from "./rangeGenerator";

let iterator = rangeGenerator(1, 10);
while(1) {
    const {value, done} = iterator.next();
    if(done) break;
//    console.log(value);
}

for(let value of rangeGenerator(10, 100)) {
    console.log(value);
}