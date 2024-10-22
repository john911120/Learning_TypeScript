/* const numberArr: number[] = [1, 3, 5, 7, 9];
let result = '';
for(let index = 0; index < numberArr.length; index++) {
    const item: number = numberArr[index];
    if(index === numberArr.length - 1) {
        result += item;
    }else {
        result += item + ', ';
    }
}
console.log(result.trim()); */

const numberArr: number[] = [1, 3, 5, 7, 9];
let result = numberArr.join(', ');
console.log(result);