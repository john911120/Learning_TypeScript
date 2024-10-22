import {FirstOrderFunction, SecondOrderFunction} from './function-signiture';
import {add} from './second_odr_fnc';

const add1: FirstOrderFunction<number, number> = add(1)
console.log(add1(2), add(1)(9));