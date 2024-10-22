export function* gen(): Generator<string, void, number> {
    let count = 5;
    let select = 0;
    while(count--) {
    //    select = yield `you select ${select}`;
            // 첫 번째 yield는 단순히 select의 현재 값을 반환
            const input = yield `you select ${select}`;
            // 다음 반복부터는 외부에서 전달받은 값을 사용
            if (input !== undefined) {
                select = input;
              }
    }
}
export const random = (max: number, min: number = 0): number =>
    Math.round(Math.random() * (max - min)) + min;

//export const random = (max, min =0) => Math.round(Math.random() * (max - min)) + min;