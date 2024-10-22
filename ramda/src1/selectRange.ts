import * as R from 'ramda';

type NumberToBooleanFunc = (n: number) => boolean;
/* export const selectRange = (min: number, max: number): NumberToBooleanFunc => 
    R.allPass([R.gte(min), R.lte(max)]); */
export const selectRange = (min: number, max: number): NumberToBooleanFunc => 
    R.allPass([R.gte(R.__, min), R.lte(R.__, max)]);

