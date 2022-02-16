const countDown = (n) => {
  if (n <= 0) {
    // :- Base Case
    console.log("Finish");
    return;
  }
  console.log(n);
  countDown(n - 1);
};

// Expected Output
// 5
// 4
// 3
// 2
// 1
countDown(5);
