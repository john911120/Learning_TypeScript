import {pipe} from './pipe';
import { squaredMap } from './squaredMap';
import { sumArray } from './sumArray';

const pitagoras_triangle = pipe(
    squaredMap, sumArray, Math.sqrt
);

console.log(pitagoras_triangle([3, 4]));