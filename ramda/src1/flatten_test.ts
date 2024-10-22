import * as R from 'ramda';

const array = R.range(1, 3).map((x:number)=> {
    return R.range(1, 3).map((y:number)=> {
        return [x, y];
    });
});

console.log(array);

const flattenedArray = R.flatten(array);
console.log(flattenedArray);