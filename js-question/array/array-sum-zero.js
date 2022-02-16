const sumZero = (arr) => {
  while (arr.length > 0) {
    let first = arr.shift();
    let second = arr.pop();
    if (first + second === 0) {
      return [first, second];
    }
  }
};

console.log(sumZero([-3, -2, -1, 0, 1, -2, 9])); // [-3, 3]
