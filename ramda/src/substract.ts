import * as R from 'ramda';

const reverseSubstract = R.flip(R.subtract);

const newArr = R.pipe(
    R.map(reverseSubstract(50)),
    R.tap(a => console.log(a))
)(R.range(1, 20));