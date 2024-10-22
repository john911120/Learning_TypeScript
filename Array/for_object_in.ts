let john = {name: 'John', age: 30};
for(let property in john) {
    console.log(`${property}: ${john[property as keyof typeof john]}`);
}