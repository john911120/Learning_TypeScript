const originArr = [771, 773, 774];
const shallowCopy = originArr;
shallowCopy[1] = 0;
console.log(originArr, shallowCopy);