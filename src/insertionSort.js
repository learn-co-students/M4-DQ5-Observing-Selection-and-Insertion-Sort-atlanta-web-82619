function insertionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    let element = arr[i];
    let j;

    for ( j = i - 1; j >= 0 && arr[j] > element ; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = element;
  }
  return arr;
}
