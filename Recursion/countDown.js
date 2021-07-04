const countDown = (number) => {
  if (number === 0) return; // Base Case
  console.log(number);
  number--;
  countDown(number);
};


countDown(5)

// Expected Output
// 5
// 4
// 3
// 2
// 1