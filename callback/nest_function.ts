const calculation = (value: number, callback : (time : number) => void): void => {
    let time = (a:number, b:number) => a *b;
    function plusing(a:number, b:number) {return a + b}

    let result = plusing(time(5,5), value);
    callback(result);
}

calculation(10, (result : number) => console.log(`result is ${result}`));