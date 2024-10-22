let array: number[] = [1, 2, 3, 4, 5];
let end = '';
let [first, second, third, ...something] = array;
end += array.join(', ');

console.log(first, second, third, something);
console.log(end);