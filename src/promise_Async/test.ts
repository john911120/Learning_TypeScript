import { readFileSync, readFile } from 'fs';

// TypeScript 3.1 이상부터 Buffer type alias를 지원
console.log('read package.json using synchronous api.....');

const buffer: Buffer = readFileSync('./package.json');
console.log(buffer.toString());

readFile('./package.json', (error : Error | null, buffer : Buffer) => {
    if(error) {
        console.error('Error reading file:', error);
        return;
    }

    console.log('read package.json using asynchronous api.....');
    console.log(buffer.toString());
});

const readFilePromise = (filename: string): Promise<Buffer> =>
    new Promise((resolve, reject) => {
        readFile(filename, (error : Error | null, buffer : Buffer) => {
            if(error)
                reject(error);
            else
                resolve(buffer);
        });
    });

    (async () => {
        const content = await readFilePromise('./package.json');
        console.log('read package.json using Promise and async/await.....');
        console.log(content);
    })()