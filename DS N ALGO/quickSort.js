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

let arrays = [2, 0, 2, 1, 1, 0];
console.log(quickSort(arrays));
