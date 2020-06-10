class Factorial {
  constructor() {}
  //implement your code here
  // TOP DOWN
  factorial(number) {
    if (number == 0) {
      return 1;
    } else return number * this.factorial(number - 1);
  }
  // BOTTOM UP
  factorials(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result = result * i;
    }
    return result;
  }
}

let factorial = new Factorial();
console.log(factorial.factorial(Number(prompt("Please enter your number"))));

// mention your time and apace complexity here
// Both approach takes O(1) space and O(n) time
