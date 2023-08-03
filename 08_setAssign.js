console.log(`-------------original array is---------------------`);
let array = [4, 5, 4, 5, 8, 5, 7, 8, 9, 7, 8]

console.log(array);

console.log(`-------------After removing duplicate numbers---------------------`);

let firstset = new Set(array);
console.log(firstset);