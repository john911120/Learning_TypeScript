const isAnyTrue = (values: boolean[]): boolean => values.every((value => value == true));

console.log(
    isAnyTrue([true, true, true]),
    isAnyTrue([false, true, true]),
)