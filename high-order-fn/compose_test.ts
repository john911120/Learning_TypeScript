import { f, g, h} from './f-g-h';
import { compose } from './compose';

const inc = (x: number) => x + 1;

const composed = compose(inc, inc, inc);
console.log(composed(1));