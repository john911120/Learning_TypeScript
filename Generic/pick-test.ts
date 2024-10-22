import { pick } from "./pick";

const obj = { name: "John", age: 30, city: "New York", country: "USA" };
console.log(
//    pick(obj, ['name', 'age']),
    pick(obj, ['name', 'age'])
)