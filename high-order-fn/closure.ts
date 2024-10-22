const makeNaming = (): () => string => {
    const namelist = ['Alice', 'Bob', 'Charlie'];
    let index = 0;
    return (): string => {
        if(index == namelist.length)
            index = 0;
            return namelist[index++];
    }
}

const makename: ()=> string = makeNaming();
console.log(
    [11,22,33,44,55,66].map(n => makename())
);