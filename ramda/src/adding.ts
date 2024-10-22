import * as R from 'ramda';

const incNumber = R.pipe(
    R.map(R.add(2)),
    R.tap(a => console.log('after add(1) : ', a))
)

const newNumbers = incNumber(R.range(1, 10));