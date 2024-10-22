Promise.resolve(1)
    .then(value => console.log(value));

Promise.resolve('Suit Train')
    .then(value => console.log(value));

Promise.resolve([111, 222, 333])
    .then(value => console.log(value));

Promise.resolve({name: 'John', age: 31})
    .then(value => console.log(value));