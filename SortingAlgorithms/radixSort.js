const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

// console.log(getDigit(123, 0)); // 3 --> 0 th place of number

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

// console.log(digitCount(1001)); // 4

const mostDigit = (num) => {
  let maxDigit = 0;
  for (let i = 0; i < num.length; i++) {
    maxDigit = Math.max(maxDigit, digitCount(num[i]));
  }
  return maxDigit;
};

// console.log(mostDigit([114567888, 12 , 123])); // 9 --> length of 114567888

const radixSort = (array) => {
  let maxDigitCount = mostDigit(array);
  for (let i = 0; i < maxDigitCount; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < array.length; j++) {
      let digit = getDigit(array[j], i);
      digitBuckets[digit].push(array[j]);
    }
    array = [].concat(...digitBuckets);
  }
  return console.log(array);
};

radixSort([9, 8, 7, 5, 5, 6, 5, 2, 98, 3, 0, 1]);
