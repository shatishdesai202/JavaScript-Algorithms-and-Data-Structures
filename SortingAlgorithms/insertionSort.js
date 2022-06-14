// const insertionSort = (ary) => {
//   for (let i = 0; i < ary.length; i++) {
//     let currentValue = ary[i];
//     for (var j = i - 1; j >= 0 && ary[j] > currentValue; j--) {
//       ary[j + 1] = ary[j];
//     }
//     ary[j + 1] = currentValue;
//   }

//   return console.log(ary);
// };

// insertionSort([9, 8, 72, 1]);



const insertionSort = (ary) => {
  for (let i = 0; i < ary.length; i++) {
    let currentValue = ary[i];

    let j = i - 1;

    while (j >= 0 && ary[j] > currentValue) {
      ary[j + 1] = ary[j];
      j--;
    }

    ary[j + 1] = currentValue;

  }

  return console.log(ary);
};

insertionSort([9, 8, 0, 72, 1]);
