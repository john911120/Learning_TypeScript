export type Person = {name : string, age : number};

export const createPerson = (name : string, age : number = 22) : Person => {
    const person = {name : name, age : age};
    return person;
}

console.log(createPerson("John"));
console.log(createPerson("Rio", 20));