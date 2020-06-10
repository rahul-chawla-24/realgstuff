let array = [1, 2, 3, 4, 5];

console.log(array.indexOf(3)); //  2

array.push(0); //  [ 1, 2, 3, 4, 5, 0 ]
console.log(array);

console.log(array.pop()); // last elem = 0
console.log(array.shift()); // first elem = 1
console.log(array); // now array = [ 2, 3, 4, 5 ]

array.splice(0, 2); // [ 2, 3 ]
console.log(array); // now array = [ 4, 5 ]

let arrayNew = array.concat([6, 7, 8]); // added to last
console.log(arrayNew); // now array = [ 4, 5, 6, 7, 8 ]
