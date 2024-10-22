export type Person = {name : string, age : number};

export const createPerson = (name : string, age : number = 22) : Person => ({name, age});
console.log(createPerson("Jackson"));
console.log(createPerson("himari", 20));