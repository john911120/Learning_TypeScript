const isAllTrue = (values: boolean[]): boolean => values.every((value => value == true));

console.log(
    isAllTrue([true, true, true]),
    isAllTrue([false, true, true]),
)