import * as R from 'ramda';

const substract = a => b => a - b;
const substract50 = substract(50);

const newArr = R.pipe(
    R.map(substract50),
    R.tap(a => console.log(a))
)(R.range(1, 10));