import * as R from 'ramda';

const word: string[] = R.split(' ')(`hello world this is TypeScript`);
console.log(word);