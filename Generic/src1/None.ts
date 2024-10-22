import { nullable } from "./nullable";
import { IValuable } from "./IValuable";
import { IFunctor } from "./IFunctor";

export class None<T> implements IValuable<T>, IFunctor<T> {
    getOrElse<T>(defaultValue: T | nullable) {
        return defaultValue;
    }
    map<U>(fn: (value : T) => U):None<U> {
        return new None;
    }
}