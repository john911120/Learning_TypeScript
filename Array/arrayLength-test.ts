import { arrayLength, isEmpty } from "./arrayLength";
let numArray : number[] = [7613, 704, 774];
let strArray : string[] = ['seoul', 'public transport', 'bus route'];

type IPerson = {name : string, age? : number};
let personArray : IPerson[] = [{name : 'max'}, {name : 'veronica', age : 30}];

console.log(
    arrayLength(numArray),
    arrayLength(strArray),
    arrayLength(personArray),
    isEmpty([]),
    isEmpty([1]),
);