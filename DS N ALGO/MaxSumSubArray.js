class MaximumSubarray {
  constructor() {}
  //implement your code here
  maximumSubarray(array) {
    let finalMax = 0,
      currMax = 0;

    for (let i = 0; i < array.length; i++) {
      currMax += array[i];

      if (currMax > finalMax) {
        finalMax = currMax;
      }
      if (currMax < 0) {
        currMax = 0;
      }
    }
    console.log(finalMax);
  }
}

let maximumsubarray = new MaximumSubarray();
let array = [];
let length = Number(prompt("Please enter length of array"));
for (let i = 1; i <= length; i++) {
  let input = Number(prompt("Please enter your number"));
  array.push(input);
}
console.log(array);
maximumsubarray.maximumSubarray(array);

// mention your time and apace complexity here
// Time complexity of this solution is O(n) as loop is running n times
// space complexity of this solution is O(1) using constants only
