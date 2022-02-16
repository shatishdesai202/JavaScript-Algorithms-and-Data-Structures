const maxSubArraySum = (arr, digit) => {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.lenght < digit) return null;

  for (let index = 0; index < digit; index++) {
    maxSum = maxSum + arr[index];
  }
  tempSum = maxSum;
  for (let i = digit; i < arr.length; i++) {
    tempSum = tempSum - arr[i - digit] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

console.log(maxSubArraySum([1, 2, 3, 4, 5, 10], 1));
console.log(maxSubArraySum([1, 2, 3, 4, 5, 10], 4));
