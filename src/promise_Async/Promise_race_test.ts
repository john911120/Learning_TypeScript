Promise.race([Promise.resolve(true), Promise.resolve('hello')])
    .then(result => console.log(result));

Promise.race([Promise.resolve(true), Promise.reject(new Error('hello'))])
.then(value => console.log(value))
.catch(error => console.error(error.message));

Promise.race([Promise.reject(new Error('error')), Promise.resolve(true)])
.then(value => console.log(value));
//.catch(error => console.error(error.message));