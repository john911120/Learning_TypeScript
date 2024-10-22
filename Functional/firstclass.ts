let first = function(a : number, b : number) { return a + b };
first = function(a, b) { return a * b };

console.log(first(5, 3));