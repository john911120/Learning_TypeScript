function* generate12(){
    yield 1;
    yield 2;
}

export function* generator12345() {
    yield* generate12();
    yield* [3, 4];
    yield 5;
}