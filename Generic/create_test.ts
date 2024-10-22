import { create } from "./create";

class Point {constructor(public x: number, public y: number) {}}
[
    create(Date),
    create(Point, 471, 741)
].forEach(s => console.log(s));