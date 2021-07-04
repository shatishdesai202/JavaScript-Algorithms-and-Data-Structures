const fib = (number) => {
  if (number < 2) return 1;
  return fib(number - 1) + fib(number - 2);
};                 

for (let i = 0; i <= 4; i++) {
  console.log(fib(i));
}

// 1
// 1
// 2
// 3
// 5