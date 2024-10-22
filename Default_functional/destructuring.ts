export type Person = {name : string, age : number};

const printPerson = ({name, age}: Person): void => 
    console.log(`Name: ${name}, Age: ${age}`);
    console.trace(printPerson);

printPerson({name: "John", age: 25});
printPerson({name: "eblin", age: 23});
printPerson({name: "noa", age: 21});
/* console.log(printPerson.name);
console.log(printPerson.length);
console.log(printPerson.prototype); */