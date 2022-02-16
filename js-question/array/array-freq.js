// const same = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     let sqrOfVal = arr1[i] ** 2;
//     if (!arr2.includes(sqrOfVal)) {
//       return false;
//     }
//   }
//   return true;
// };

//  refactore code

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const freqCounter1 = {};
  const freqCounter2 = {};

  for (let val of arr1) {
    freqCounter1[val] = (freqCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    freqCounter2[val] = (freqCounter2[val] || 0) + 1;
  }

  for (let key in freqCounter1) {
    if (!(key ** 2 in freqCounter2)) {
      return false;
    }

    console.log(`${freqCounter2[key ** 2]} -> ${freqCounter1[key]}`);
    if (freqCounter2[key ** 2] !== freqCounter1[key]) {
      return false;
    }
  }
  console.log(freqCounter1);
  console.log(freqCounter2);
  return true;
};

console.log(same([1, 2, 3, 2], [9, 1, 4, 4])); // true
