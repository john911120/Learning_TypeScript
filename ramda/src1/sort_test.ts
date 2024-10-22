import * as R from 'ramda';

type voidToNumberFunction = () => number;
const makeRandomNumber = (max: number): voidToNumberFunction =>
    (): number => Math.floor(Math.random() * max);

const array = R.range(1, 6).map(makeRandomNumber(100));
const sortedArray = R.sort((a: number, b: number): number => a - b)(array);

console.log(array, sortedArray);