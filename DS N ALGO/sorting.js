bubbleSort = array => {
  let size = array.length;
  for (let i = 0; i < size - 1; i++) {
    for (let j = 0; j < size - 1; j++) {
      if (array[j + 1] < array[j]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
};

let arrays = [2, 0, 2, 1, 1, 0];
console.log(bubbleSort(arrays));
