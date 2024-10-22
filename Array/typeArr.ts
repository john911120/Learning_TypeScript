let route_numbers: number[] = [704, 708, 741, 761];
let string_arrays: string[] = ['서울특별시','시내버스노선번호'];

//console.log(route_numbers, string_arrays);
type Person_info = { name: string, age?: number };
let Person_infoList: Person_info[] = [{name:'jack'}, {name:'tom', age:25}];
console.log(Person_infoList);
console.log(Array.isArray(Person_infoList));