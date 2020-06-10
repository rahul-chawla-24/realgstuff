var firstUniqChar = function(str) {
  if (!str) return -1;

  let map = new Map();
  for (i in str) {
    let currentChar = str.charAt(i);
    if (!map.has(currentChar)) {
      map.set(currentChar, i);
    } else {
      map.set(currentChar, -1);
    }
  }
  console.log(map);
  let min = Number.MAX_VALUE;
  for (let index of map.values()) {
    if (index > -1 && index < min) {
      min = index;
      break;
    }
  }
  return min == Number.MAX_VALUE ? -1 : min;
};

// time complexity of solution is O(2N)
// space complexity of this solution is O(N*N)
