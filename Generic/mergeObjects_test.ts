import { mergeObjects } from "./mergeObjects";

type INameable = { name: string };
type IAgeable = { age: number };

const nameAndAge: INameable & IAgeable = mergeObjects({ name: "John" }, { age: 30 });
console.log(nameAndAge);