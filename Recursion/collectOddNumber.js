// const helperFunction = (arr) => {
//   let resultArray = [];
//   const collectOddNumber = (arr) => {
//     if (arr.length === 0) {
//       return;
//     }

//     if (arr[0] % 2 !== 0) {
//       resultArray.push(arr[0]);
//     }

//     collectOddNumber(arr.slice(1));
//     return resultArray;
//   };
//   collectOddNumber(arr);
//   return resultArray;
// };

// console.log(helperFunction([1, 2, 3, 4, 5]));

// Pure Recursion -->  without helper function

const collectOddNumber = (arr) => {
  let resultArray = [];
  if (arr.length === 0) {
    return resultArray;
  }

  if (arr[0] % 2 !== 0) {
    resultArray.push(arr[0]);
  }
  //   arr.shift(1);
  resultArray = resultArray.concat(collectOddNumber(arr.slice(1)));
  return resultArray;
};

console.log(collectOddNumber([1, 2, 3, 4, 5, 6, 7]));
