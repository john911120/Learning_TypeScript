/*
export const pick = (obj, keys) => keys.map(key => ({ [key]: obj[key] }))
    .reduce((result, value) => ({...result, ...value}), {});
*/
export const pick = <T, K extends keyof T>(obj: T, keys: K[]) =>
    keys.map(key => ({[key]: obj[key] }))
        .reduce((result, value) => ({...result, ...value}), {});