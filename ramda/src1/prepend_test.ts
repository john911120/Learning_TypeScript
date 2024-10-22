import * as R from 'ramda';

const array: number[] = [11, 22];
const newArray = R.prepend(1)(array);
console.log(array, newArray);