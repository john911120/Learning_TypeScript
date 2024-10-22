export class IterableUsingGenerator<T> implements Iterable<T> {
    constructor(private values: T[] = [], private currentIdx: number = 0 ) {}

    [Symbol.iterator] = function* (this: IterableUsingGenerator<T>) {
        while(this.currentIdx < this.values.length) {
            yield this.values[this.currentIdx++];
        }
    }.bind(this);
}