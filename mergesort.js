function split(wholeArray) {
  const mitad = Math.floor(wholeArray.length / 2);
  const firstHalf = wholeArray.slice(0, mitad);
  const secondHalf = wholeArray.slice(mitad);

  return [firstHalf, secondHalf];
}

function merge(array1, array2) {
  const newArr = [];
  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      newArr.push(array1[i]);
      i++;
    } else {
      newArr.push(array2[j]);
      j++;
    }
  }

  for (; i < array1.length; i++) {
    newArr.push(array1[i]);
  }

  for (; j < array2.length; j++) {
    newArr.push(array2[j]);
  }

  return newArr;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const [array1, array2] = split(arr);

  return merge(mergeSort(array1), mergeSort(array2));
}
