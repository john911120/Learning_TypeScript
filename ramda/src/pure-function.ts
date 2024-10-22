import * as R from 'ramda';

const orgArr: number[] = [11, 22, 33];
const rstArr = R.pipe(
    R.map(R.add(2))
)(orgArr);

console.log(orgArr, rstArr);