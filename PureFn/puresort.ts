export const pureSorting = <T>(array: readonly T[]): T[] => {
    let deepCopying = [...array];
    return deepCopying.sort();
}