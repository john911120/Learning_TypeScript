const period = 500;
let count = 0;
console.log('program is started');
const id = setInterval(() => {
    if(count >= 100) {
        clearInterval(id);
        console.log('program is ended');
    } else {
        console.log(++count);
    }
}, period);