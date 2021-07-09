// binary search is much faster form of search

// rather than eliminating one element at a time, you can eliminate half of the remaining element at a time

// Binary search only work on sorted Arrays

const binarySearch = (arr, elem) => {
  let start = 0;
  let end = arr.length - 1;
  let middle;

  middle = ((start + end) / 2) | 0;

  while (arr[middle] !== elem && start <= end) {
    if (arr[middle] < elem) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
    middle = ((start + end) / 2) | 0;
    console.log(start, middle, end);
  }

  return arr[middle] === elem ? middle : -1;
};

const result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5);
// const result = binarySearch([1, 2, 3], 1);
console.log(result);

// [1, 2, 3, 4, 5, 6, 7, 8, 9]
//  s           m            e
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
//              s     m     e
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
//                      sm e
