function insertionSort(arr) {
  let i = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j > 0 && arr[j - 1] > arr[j]; j--){
      let a = arr[j]
      arr[j] = arr[j -1]
      arr[j - 1] = a
    }
  }
}
