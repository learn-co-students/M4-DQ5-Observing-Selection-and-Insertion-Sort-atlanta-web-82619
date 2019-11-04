function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i]
    let index = null
    let temp = arr[i]

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j]
        index = j
      }
    }
    arr[i] = min
    arr[index] = temp
  }
}