function bubbleSort(array) {
  do {
    var swapped = false;
    for(let i = 1; i < array.length; i++) {
      if(array[i - 1] > array[i]) {
        swapped = true;
        animations.push([i-1, i, "swap"]);
        [array[i-1], array[i]] = [array[i], array[i-1]];
      }
    }
  } while(swapped);
  isSorted = true;
  return animations;
}

function cocktailSort(array) {
	let start = 0, end = array.length, swapped = true;

	while (swapped) {
		swapped = false;
		for (let i = start; i < end - 1; i++) {
			if (array[i] > array[i+1]) {
				swap(array, i, i + 1);
				swapped = true;
			}
		}

		end--;
		if (!swapped)
			break;
    
		swapped = false;
		for (let i = end - 1; i > start; i--) {
			if (array[i - 1] > array[i]) {
				swap(array, i, i - 1);
				swapped = true;
			}
		}

		start++;
	}
  isSorted = true;
	return animations;
}

function quickSort(array, start = 0, end = array.length - 1) {
  if (start >= end) {
    return animations;
  }

  let index = partition(array, start, end);

  quickSort(array, start, index - 1);
  quickSort(array, index + 1, end);

  isSorted = true;
  return animations;
}

function partition(array, start, end) {
  let pivotIndex = start;
  let pivotValue = array[end];
  for(let i = start; i < end; i++) {
    if(array[i] < pivotValue) {
      swap(array, i, pivotIndex);
      pivotIndex++;
    }
  }
  swap(array, pivotIndex, end);
  return pivotIndex;
}

function swap(array, a, b) {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
  animations.push([a, b, "swap"]);
}

function mergeSort(arr) {
  // Base case
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  // Recursive calls
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))

  isSorted = true
  return merge(arr, left, right)
}

function merge(arr, left, right) {
  let sortedArr = [] // the sorted items will go here
  while (left.length && right.length) {
    // Insert the smallest item into sortedArr
    if (left[0] < right[0]) {
      swap(arr, array.indexOf(left[0]), array.indexOf(right[0]))
      sortedArr.push(left.shift())
    } else {
      swap(arr, array.indexOf(left[0]), array.indexOf(right[0]))
      sortedArr.push(right.shift())
    }
  }

  if(left.length > 0) {
    swap(arr, array.indexOf(left[0]), sortedArr.length - 1)
  }
  if(right.length > 0) {
    swap(arr, array.indexOf(right[0]), sortedArr.length - 1)
  }
  
  // Use spread operators to create a new array, combining the three arrays
  return [...sortedArr, ...left, ...right]
}

function selectionSort(inputArr) { 
  let n = inputArr.length;
      
  for(let i = 0; i < n; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for(let j = i+1; j < n; j++) {
      animations.push([j, min, "compare"]);
      if(inputArr[j] < inputArr[min]) {
        min=j; 
      }
    }
    if (min != i) {
      // Swapping the elements
      swap(inputArr, min, i);    
    }
  }
  isSorted = true;
  return animations;
}

function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    let current = arr[i];

    let j = i - 1;

    while(j > -1 && current < arr[j]) {
      arr[j + 1] = arr[j];
      animations.push([j + 1, j, "swap"]);
      j--;
    }
    arr[j + 1] = current;
  }
  isSorted = true;
  return animations;
}

function heap_root(input, i) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;

    if (left < array_length && input[left] > input[max]) {
        max = left;
    }

    if (right < array_length && input[right] > input[max])     {
        max = right;
    }

    if (max != i) {
        swap(input, i, max);
        heap_root(input, max);
    }
}

function heapSort(input) {
    
    array_length = input.length;

    for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
        heap_root(input, i);
      }

    for (i = input.length - 1; i > 0; i--) {
        swap(input, 0, i);
        array_length--;
      
      
        heap_root(input, 0);
    }
}

function shellSort(arr) {
    var increment = arr.length / 2;
    while (increment > 0) {
        for (i = increment; i < arr.length; i++) {
            var j = i;
            var temp = arr[i];
    
            while (j >= increment && arr[j-increment] > temp) {
              swap(arr, j, j-increment);
              j = j - increment;
            }
    
            arr[j] = temp;
        }
    
        if (increment == 2) {
            increment = 1;
        } else {
            increment = parseInt(increment*5 / 11);
        }
    }
  isSorted = true;
  return arr;
}
