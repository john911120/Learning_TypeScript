interface Person4 {
    name: string;
    age?: number;
}

class Person4 implements Person4 {
    constructor(public name: string, public age?: number) {}
}
let japanese = new Person4('浜崎あゆみ', 47);
console.log(japanese);