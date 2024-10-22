import * as R from 'ramda';

const addIdx = R.pipe(
    R.addIndex(R.map)(R.add),
    R.tap(a=> console.log(a))
)

const newNumbers = addIdx(R.range(1, 10));