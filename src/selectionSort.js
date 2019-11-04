function selectionSort(arr) {
  // sorted = [];
  // unsorted = arr.slice();

  // for(let i = 0; i < arr.length; i++) {
  //   let min = Infinity;
  //   for(let j = 0; j < unsorted.length; j++) {
  //     if (unsorted[j] < min) {
  //       min = unsorted[j];
  //     }
  //   }

  //   index = unsorted.findIndex(num => num === min);

  //   sorted.push(min);
  //   unsorted = [...unsorted.slice(0, index), ...unsorted.slice(index + 1)];
  // }

  // return sorted;

  for(let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let index = null;
    let temp = arr[i];

    for(let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        index = j;
      }
    }

    arr[i] = min;
    arr[index] = temp;
  }
}
