function selectionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  for (var i = 0; i < arr.length; i++) {

    let min = i; //  storing the index of minimum element

    for (var j = i + 1; j < arr.length; j++) {
        if (arr[min] > arr[j]) {
            min = j; // updating the index of minimum element
        }
    }

    if (i !== min) {
        [arr[ i ],arr[min]]= [arr[min],arr[ i ]];
    }
}
return arr
}
