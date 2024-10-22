export class A {
    value : number = 741;
//    method: () => void = function(): void {
        method: () => void = () => {
        console.log(`value : ${this.value}`);
    }
}