import { IterableUsingGenerator } from "./IterableUsingGenerator";

for(let item of new IterableUsingGenerator([1, 2, 3, 4, 5])) {
    console.log(item);
}