interface IPerson2 {
    name: string;
    age: number;
    etc? : boolean;
}
let goodPerson1 : IPerson2 = {name: 'John', age: 30};
let goodPerson2 : IPerson2 = {name: 'Eblin', age: 25, etc: true};