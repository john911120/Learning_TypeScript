const asyncReturning = async() => {
    return [1,2,3,4,5]
}

asyncReturning().then(value => console.log(value));