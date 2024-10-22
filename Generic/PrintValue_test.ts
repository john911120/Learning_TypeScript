import {printValue,Valuable} from './printValue';

printValue(new Valuable<number>(10));
printValue(new Valuable<boolean>(true));
printValue(new Valuable<string>('generic'));
printValue(new Valuable<number[]>([11, 22, 33]));
