import {Bird, Fish} from './BirdAndFish';
import {flyOfSwim} from './flyOrSwim';

[new Bird(), new Fish()].forEach(flyOfSwim);