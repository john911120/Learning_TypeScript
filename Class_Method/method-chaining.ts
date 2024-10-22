export class Cal {
    constructor(public value: number = 0) {}
    plus(value: number): Cal {
        this.value += value;
        return this;
    }
    minus(value: number): Cal {
        this.value -= value;
        return this;
    }
    multiply(value: number): Cal {
        this.value *= value;
        return this;
    }
    divide(value: number): Cal {
        this.value /= value;
        return this;
    }
}