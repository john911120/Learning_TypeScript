import {map} from './map';

const square = (value:number):number => value * value;
export const squaredMap = map(square);