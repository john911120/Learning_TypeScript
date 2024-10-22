import {pipe} from './pipe';
import {squaredMap} from './squaredMap';

const forSquare = pipe(squaredMap, squaredMap);
console.log(forSquare([3, 4]));