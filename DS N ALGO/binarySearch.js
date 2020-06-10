binarySearch = (arr, target) => {
  let start = 0;
  let size = arr.length;
  let end = size - 1;
  let mid = Math.trunc((start + end) / 2);
  while (start <= end) {
    if (arr[mid] == target) {
      return mid;
    } else if (target < arr[mid]) {
      end = mid - 1;
    } else {
      if (target > arr[mid + 1]) {
      }

      start = mid + 1;
    }

    mid = Math.trunc((start + end) / 2);
  }

  if (target <= arr[mid]) {
    return parseInt(mid);
  }

  return parseInt(mid + 1);
};

var array = [1, 3, 5, 6];

console.log(binarySearch(array, 5));
console.log(binarySearch(array, 2));
console.log(binarySearch(array, 7));
console.log(binarySearch(array, 0));
