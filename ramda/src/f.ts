import R from "types-ramda";

type numToNumFunc = (number) => number;

const exp = (N: number) => (x:number): number => x ** N;
const square = exp(2);

export const f = (a:number, b:number, c:number): numToNumFunc => 
    (x: number): number => R.add(R.multiply(a)(square(x)) + R.multiply(b)(x), c);