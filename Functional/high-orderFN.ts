const add = (a: number) : (arg0 : number) => number => (b:number): number => a + b;
const result = add(700)(7);
console.log(result);