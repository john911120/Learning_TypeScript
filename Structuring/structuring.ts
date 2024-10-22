import {IPerson, ICompany } from './IPerson_ICompany';

let john: IPerson = {name : 'John', age: 30},
    eblin : IPerson = {name : 'Eblin', age: 25};

let samsung : ICompany = {name : 'Samsung Electronic Inc.', age: 55},
    apple : ICompany = {name : 'Apple Inc.', age: 48};


console.log(john.name + '/' + john.age);
console.log(eblin.name + '/' + eblin.age);
console.log(samsung + '/' + john.name);
console.log(apple + '/' + eblin.name);
