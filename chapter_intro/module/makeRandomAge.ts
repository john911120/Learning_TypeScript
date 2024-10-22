let MAX_AGE = 120;


export function makeRandomAge(max : number = MAX_AGE): number {
    return Math.ceil((Math.random() * max));
}