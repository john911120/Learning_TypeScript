import { Bird, Fish } from './BirdAndFish';
import { isFlyable } from './isFlyable';
import { isSwimmable } from './isSwimable';

export const swimOrFly = (o: Bird | Fish) => {
    if (isFlyable(o)) {
        o.fly();
    } else if (isSwimmable(o)) {
        o.swim();
    }
};