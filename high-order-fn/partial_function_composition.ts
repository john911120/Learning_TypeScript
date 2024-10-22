import {pipe} from './pipe';

const add = (x:number) => (y:number) => x + y;
const inc = add(10);

const add3 = pipe(inc, add(80));
console.log(add3(10));