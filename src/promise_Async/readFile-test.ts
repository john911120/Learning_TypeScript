import {readFile} from 'fs';

readFile('./package.json', (error : Error | null, buffer : Buffer) => {
    if(error)
        throw error;
    else {
        const content: string = buffer.toString();
        console.log(content);
    }
});