import {random, gen} from './yield_return';
const iter = gen();
while(true) {
    const {value, done} = iter.next(random(50, 1));
    if(done) break;
    console.log(value);
}