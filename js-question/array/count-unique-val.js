const countUniqueVal = (arr) => {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }

  let keys = Object.keys(obj);
  return keys.length;
};

console.log(countUniqueVal([])); // 0
console.log(countUniqueVal([1, 1, 1, 1, 1, 2])); // 2
console.log(
  countUniqueVal([1, 1, 1, 1, 1, 2, 3, 4, 5, 5, 5, 5, 6, 6, 6, 7, 7, 8])
); // 8

console.log(
  countUniqueVal([
    1, 1, 1, 1, 1, 2, 3, 4, 5, 5, 5, 5, 6, 6, 6, 7, 7, 8, -8, -7, -6, -5, -4, 4,
    -3, -2, -1,
  ])
); // 16
