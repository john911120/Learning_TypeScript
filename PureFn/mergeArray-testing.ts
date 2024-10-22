import { mergeArray } from "./mergeArray";

const mergedArr1: string[] = mergeArray(
    ['john'], ['maria']
);
console.log(mergedArr1);

const mergedArr2: number[] = mergeArray(
    [741], [708, 701], [360, 140]
);
console.log(mergedArr2);