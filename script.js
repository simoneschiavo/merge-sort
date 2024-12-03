function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const arrLeft = mergeSort(arr.slice(0, mid));
  const arrRight = mergeSort(arr.slice(mid));

  return merge(arrLeft, arrRight);
}

function merge(arrLeft, arrRight, sortedArr = []) {
  let i = 0;
  let j = 0;
  let k = 0;
  while (i <= arrLeft.length - 1 && j <= arrRight.length - 1) {
    if (arrLeft[i] < arrRight[j]) {
      sortedArr[k++] = arrLeft[i++];
    } else {
      sortedArr[k++] = arrRight[j++];
    }
  }
  for (; i <= arrLeft.length - 1; i++) {
    sortedArr[k++] = arrLeft[i];
  }
  for (; j <= arrRight.length - 1; j++) {
    sortedArr[k++] = arrRight[j];
  }
  return sortedArr;
}

console.log(mergeSort([1, 12, 34, 24, 5]));
