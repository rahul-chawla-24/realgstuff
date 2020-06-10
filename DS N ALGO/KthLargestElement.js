/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let newNums = quickSort(nums);
    return nums[nums.length - k ]; 
};

// Time Complexity of the function is O(N*N) worst case 
// as we are using quick sort . and O(n log n ) in best and average case 
// space complexity of the algorithm is O(1)

const swap = (items, leftIndex, rightIndex) => {
  let temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
};
const partition = (items, left, right) => {
  let pivot = items[Math.floor((right + left) / 2)],
    i = left,
    j = right;
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }
  return i;
};

const quickSortHelper = (items, left, right) => {
  let index;
  if (items.length > 1) {
    index = partition(items, left, right);
    if (left < index - 1) {
      quickSortHelper(items, left, index - 1);
    }
    if (index < right) {
      quickSortHelper(items, index, right);
    }
  }
  return items;
};

const quickSort = items => {
  quickSortHelper(items, 0, items.length - 1);
  return items;
};