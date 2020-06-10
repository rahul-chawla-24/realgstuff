// Time Complexity of the soltuion is O(n)
// as it traverse only once
// to the size of array
// Space Complexity is O(1) beacuse using constants only

class MoveZeros {
  constructor() {}

  //implement your code here
  moveZeros(array) {
    let index = 0;
    let size = array.length;
    for (let i = 0; i < size; i++) {
      if (array[i] != 0) {
        array[index] = array[i];
        index++;
      }
    }
    for (let i = index; i < size; i++) {
      array[index] = 0;
      index++;
    }
    return array;
  }
}

let movezeros = new MoveZeros();
let array = [];
let length = Number(prompt("Please enter the length of array"));
for (let i = 1; i <= length; i++) {
  let input = Number(prompt("Please enter your number"));
  array.push(input);
}
console.log(array);
movezeros.moveZeros(array);
