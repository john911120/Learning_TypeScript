export type FirstOrderFunction<T, R> = (T) => R;
export type SecondOrderFunction<T, R> = (T) => FirstOrderFunction<T, R>;
export type ThirdOrderFunction<T, R> = (T) => SecondOrderFunction<T, R>;