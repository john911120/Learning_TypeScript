class Person1 {
    name: string;
    age?: number;
}

let jackson : Person1 = new Person1();
jackson.name = 'Jackson';
jackson.age = 23;
console.log(jackson);