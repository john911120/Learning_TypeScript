import {readFile} from 'fs';

readFile('./package.json', (error : Error | null, buffer : Buffer) => {
    if(error)
        throw error;
    else {
        const content: string = buffer.toString();
        console.log(content);

    readFile('./tsconfig.json', (error2 : Error | null, buffer2 : Buffer) => {
        if(error)
            throw error2;
        else {
            const content: string = buffer.toString();
            console.log(content);
        }
    })
    }
})