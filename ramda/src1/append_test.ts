import * as R from 'ramda';

const array: number[] = [706, 773];
const newArray = R.append(8701)(array);
console.log(newArray);