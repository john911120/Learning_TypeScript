import { ResultType } from "./ResultType";

export const doSomethin = () : ResultType => {
    try {
        throw new Error("SomeThing Error happened! ^^");
    } catch (e) {
        
        if (e instanceof Error) {
            return [false, e.message];
        } else {
            return [false, 'Unknown error occurred']; // e가 Error가 아닐 경우 처리
        }
        
        // return [false, e.message];
    }
};