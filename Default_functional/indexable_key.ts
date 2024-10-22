export type KeyValueType = {
    [key: string] : string;
}
export const makingObj = (key: string, value: string) : KeyValueType => ({[key]: value});

console.log(makingObj("name", "John"));
console.log(makingObj("firstName", "Alexander"));