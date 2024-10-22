interface INameable {
    name : string;
}

function getName(a : INameable | undefined) {
    return a != undefined ? a.name : 'Unknown_User';
}

let n = getName(undefined);
console.log(n);
console.log(getName({name: 'John'}));