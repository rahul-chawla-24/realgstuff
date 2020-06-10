mergeSort = arr => {
  if (arr.length < 2) return arr;
  else {
    let sI = 0,
      eI = arr.length - 1;
    let mid = Math.trunc((sI + eI) / 2);

    let left = arr.slice(0, mid + 1),
      right = arr.slice(mid + 1, arr.length);

    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
  }
  return arr;
};

merge = (leftArray, rightArray, arr) => {
  let leftLength = leftArray.length,
    rightLength = rightArray.length,
    i = 0,
    j = 0,
    k = 0;

  while (i < leftLength && j < rightLength) {
    if (leftArray[i] <= rightArray[j]) {
      arr[k] = leftArray[i];
      i++;
    } else {
      arr[k] = rightArray[j];
      j++;
    }
    k++;
  }
  while (i < leftLength) {
    arr[k] = leftArray[i];
    i++;
    k++;
  }
  while (j < rightLength) {
    arr[k] = rightArray[j];
    j++;
    k++;
  }
};

let arrays = [2, 0, 2, 1, 1, 0];
console.log(mergeSort(arrays));
