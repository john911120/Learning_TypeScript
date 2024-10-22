import {IPerson} from './IPerson_ICompany';

let toranoko : IPerson = {name : 'Toranoko', age: 17}
let {name, age} = toranoko;
console.log(name + ' ' + age);