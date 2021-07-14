const selectionSort = (ary) => {
  for (let i = 0; i < ary.length; i++) {
    let minValue = i;
    for (let j = i + 1; j < ary.length; j++) {
      if (ary[minValue] > ary[j]) {
        minValue = j;
      }
    }
    console.log(ary[minValue]);

    if (i !== minValue) [ary[i], ary[minValue]] = [ary[minValue], ary[i]];
  }
  return ary;
};

const result = selectionSort([99, 3, 6, 123, 7, 8, 9, 10, 99, 896, 2]);
console.log(result);
