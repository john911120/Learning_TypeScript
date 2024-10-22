let originalArr = [753, 7613, 7722, 8774];
let deepingCopy = [...originalArr];
deepingCopy[3] = 7720;
console.log(originalArr, deepingCopy);