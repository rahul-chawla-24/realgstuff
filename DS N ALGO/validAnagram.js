/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function NewArray(size) {
  var x = [];
  for (var i = 0; i < size; ++i) x[i] = 0;
  return x;
}

var isAnagram = function(s, t) {
  let frequency = NewArray(256);

  for (let i = 0; i < s.length; i++) {
    let inputOne = s.charCodeAt(i);
    frequency[inputOne]++;
  }
  for (let i = 0; i < t.length; i++) {
    let inputTwo = t.charCodeAt(i);

    frequency[inputTwo] -= 1;
  }

  for (let i = 0; i < 256; i++) {
    if (frequency[i] != 0) return false;
  }

  return true;
};
