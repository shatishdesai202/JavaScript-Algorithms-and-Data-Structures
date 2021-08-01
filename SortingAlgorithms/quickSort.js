const pivot = (arr, start = 0, end = arr.length - 1) => {
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
      //   console.log(arr);
    }
  }
  [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
  console.log(arr);
  return swapIndex; // 3
};

const QuickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left
    QuickSort(arr, left, pivotIndex - 1);
    // right
    QuickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

console.log(QuickSort([4, 8, 2, 1, 5, 7, 310, 6, 3]));
