import Iperson from '../module/Iperson';
import person from '../module/person';
import Chance from 'chance';
import * as R from 'ramda';
/*
const testMakePerson = (): void => {
    let john : Iperson = makePerson('John');
    let eblin : Iperson = makePerson('eblin');
    console.log(john, eblin);
}

testMakePerson();
*/
const chance = new Chance();
let Persons : Iperson[] = R.range(0,2).map((n:number) => new person(chance.name(), chance.age()));

console.log(Persons);
