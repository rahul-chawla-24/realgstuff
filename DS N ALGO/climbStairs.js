climbStair = n => {
  let array = [1, 2, 3];
  for (let i = 3; i < n; i++) {
    array[i] = array[i - 1] + array[i - 2];
  }
  return array[n - 1];
};

console.log(climbStair(2));
console.log(climbStair(3));
