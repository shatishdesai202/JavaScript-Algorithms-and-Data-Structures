// Time Complexity O(n log n)
// created At 1948
// computer scientist ->  jonathan van norman

const mergeSort = (ary1, ary2) => {
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

  return console.log(resulrArray);
};

mergeSort([1, 2, 3, 99], [10, 11, 12]);
