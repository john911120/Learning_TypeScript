import * as R from 'ramda';

const input: number[] = R.range(1, 11), half = input[input.length / 2];

const substractOrAdd = R.pipe(
    R.map(R.ifElse(R.lte(half), R.inc, R.dec)),
    R.tap(a => console.log(a))
);

const result = substractOrAdd(input);