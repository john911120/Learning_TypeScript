class Person3 {
    name: string;
    age?: number;
    constructor(name: string, age?: number) {
        this.name = name;
        this.age = age;
    }
}

let BadPerson = new Person3('Tom', 15);
console.log(BadPerson);