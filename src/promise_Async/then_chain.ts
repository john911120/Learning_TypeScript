Promise.resolve(1)
  .then((value: number) => {
    console.log(value);
    return Promise.resolve(true);
  })
  .then((value: boolean) => {
    console.log(value);
    return [11, 22, 33];
  })
  .then((value: number[]) => {
    console.log(value);
    return {name: 'John', age: 31}
  })
  .then((value: {name: string, age: number}) => {
    console.log(value);
  });