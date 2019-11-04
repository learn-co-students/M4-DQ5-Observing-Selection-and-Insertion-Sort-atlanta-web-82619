function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let jMin = i
    for(let j = i; j < arr.length; j++) {
      if (arr[j] < arr[jMin]) {
        jMin = j
      }
    }
    let a = arr[i]
    arr[i] = arr[jMin]
    arr[jMin] = a
  }
}