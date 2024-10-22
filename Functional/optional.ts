interface IAgeable {
    age? : number;
}

function getAge(a : IAgeable | undefined | null) {
    return a != undefined && a.age ? a.age : 0;
}

console.log(getAge(undefined));
console.log(getAge(null));
console.log(getAge({age: 25}));