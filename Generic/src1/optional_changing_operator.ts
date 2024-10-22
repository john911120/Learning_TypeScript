export interface Iperson {
    name: string
    age?: number
}
let person : Iperson = { name: 'John' };
console.log(person?.name);