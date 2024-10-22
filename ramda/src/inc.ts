import * as R from 'ramda';

const numbers: number[] = R.range(1, 10);
const incNumber = R.pipe(
    R.tap(a => console.log('before inc : ', a)),
    R.map(R.inc),
    R.tap(a => console.log('after inc : ', a))
)

const newNumbers = incNumber(numbers);