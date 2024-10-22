export class StringIterable implements Iterable<string> {
    constructor(private strings: string[] = [], private currentIdx:number = 0) {}
    [Symbol.iterator](): Iterator<string> {
        const that = this;
        let currentValue = that.currentIdx, length= that.strings.length;
        
        const iterator : Iterator<string> = {
            next(): {value: string, done: boolean} {
                const value = currentValue < length? that.strings[currentValue++] : undefined;
                const done = value == undefined;
         return {value: value as string, done};
        }
    }
    return iterator;
    }
}