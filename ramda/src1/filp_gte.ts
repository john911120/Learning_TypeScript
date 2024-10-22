import * as R from 'ramda';

R.pipe(
    R.filter(R.flip(R.gte)(3)),
    R.tap(n => console.log(n))
)(R.range(1, 11));