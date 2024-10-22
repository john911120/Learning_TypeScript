import {FirstOrderFunction, SecondOrderFunction} from './function-signiture';
import {add_triple} from './third_odr_fnc';

const add2: SecondOrderFunction<number, number> = add_triple(9)
const add1: FirstOrderFunction<number, number> = add2(1)
console.log(add1(2), add2(1)(2), add_triple(1)(0)(0));