export class C {
    static Who(): string{
        return `I'm C class. I'm static method.`;
    }
}

export class D {
    static Who(): string{
        return `I'm D class. I'm static method.`;
    }
}

console.log(C.Who());
console.log(D.Who());