    import * as U from '../module/makeRandomAge';
    import Iperson from '../module/Iperson';

    export default class Person implements Iperson {
        constructor(public name : string, public age : number) {}
    }

    export const makePerson = (name : string, age: number = U.makeRandomAge()): Iperson => ({name, age});