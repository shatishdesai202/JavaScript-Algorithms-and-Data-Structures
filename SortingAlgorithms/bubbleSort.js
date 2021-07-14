// const bubbltSort = (ary) => {
//   for (let i = 0; i < ary.length; i++) {
//     for (let j = 0; j < ary.length - 1; j++) {
//       console.log(i, j, j + 1);
//       if (ary[j] > ary[j + 1]) {
//         [ary[j], ary[j + 1]] = [ary[j + 1], ary[j]];
//       }
//     }
//   }
//   return console.log(ary);
// };

// optimized with noSwap
// when array is mostof sorted
const bubbltSort = (ary) => {
  let noSwap;
  for (let i = 0; i < ary.length; i++) {
    noSwap = true;
    for (let j = 0; j < ary.length - 1; j++) {
    //   console.log(i, j, j + 1);
      if (ary[j] > ary[j + 1]) {
        [ary[j], ary[j + 1]] = [ary[j + 1], ary[j]];
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return console.log(ary);
};

// const bubbltSort = (ary) => {
//   for (let i = ary.length; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//       console.log(i, j, j + 1);
//       if (ary[j] > ary[j + 1]) {
//         [ary[j], ary[j + 1]] = [ary[j + 1], ary[j]];
//       }
//     }
//   }
//   return console.log(ary);
// };

bubbltSort([1, 3, 4, 5, 6, 7, 8, 9, 10, 99, 896, 2]);

[10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
