function bubbleSort(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

function swap(array, index1, index2) {
  let temporal = array[index1];
  array[index1] = array[index2];
  array[index2] = temporal;
}
