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

let weapons = ['pistol', 'shotgun', 'rifle'];

for (let index in weapons){
    const kind = weapons[index];
    console.log(`[${index}] : ${kind}`);
}
