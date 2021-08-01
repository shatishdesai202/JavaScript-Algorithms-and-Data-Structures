// Time Complexity O(n log n)
// created At 1948
// computer scientist ->  jonathan van norman

const merge = (ary1, ary2) => {
  let resulrArray = [];

  let i = 0,
    j = 0;

  while (i < ary1.length && j < ary2.length) {
    if (ary1[i] < ary2[j]) {
      resulrArray.push(ary1[i]);
      i++;
    } else {
      resulrArray.push(ary2[j]);
      j++;
    }
  }

  while (i < ary1.length) {
    resulrArray.push(ary1[i]);
    i++;
  }

  while (j < ary2.length) {
    resulrArray.push(ary2[j]);
    j++;
  }

  return resulrArray;
};

const mergeSort = (arr) => {
  console.log({ arr });
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let leftSideOfArray = mergeSort(arr.slice(0, mid));
  console.log({ leftSideOfArray });
  let rightSideOfArray = mergeSort(arr.slice(mid));
  console.log({ rightSideOfArray });
  return merge(leftSideOfArray, rightSideOfArray);
};

// merge([1, 2, 3, 99, 123], [10, 11, 12, 345]);
console.log(mergeSort([10, 9, 8, 7]));
