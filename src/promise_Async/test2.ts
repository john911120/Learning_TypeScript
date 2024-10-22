export const test2 = async() => {
    let value = await 'hello';
    console.log(value);
    value = await Promise.resolve('hello');
    console.log(value);
}