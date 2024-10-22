import { pureDelete } from "./pureDelete";

const mixedArr : object[] = [
    [], {name: 'john'}, {name: 'maria', age: 28}, ['description']
]
const objectsOnly: object[] = pureDelete(mixedArr, (val) => Array.isArray(val));
console.log(mixedArr, objectsOnly);