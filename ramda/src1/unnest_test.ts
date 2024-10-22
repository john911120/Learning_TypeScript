import * as R from 'ramda';

const array = R.range(1, 3).map((x:number)=> {
    return R.range(1, 3).map((y:number)=> {
        return [x, y];
    });
});

console.log(array);

const unnestedArray = R.unnest(array);
console.log(unnestedArray);

const doubleUnnestedArray = R.pipe(R.unnest, R.unnest)(array);
console.log(doubleUnnestedArray);