import { readFilePromise } from "./readFilePromise";

readFilePromise('./package.json')
    .then((content: string) => {
        console.log(content);
        return readFilePromise('./tsconfig.json');
    })
    .then((content: string) => {
        console.log(content);
        return readFilePromise('.');
    })
    .catch((error: Error) => console.log('error : ', error.message))
    .finally(() => console.log('Finished reading files'));