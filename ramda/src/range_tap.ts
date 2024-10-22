import * as R from 'ramda';

const numbers: number[] = R.range(1, 101);
R.tap(n => console.log(n))(numbers);