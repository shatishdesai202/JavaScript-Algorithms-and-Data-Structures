const factorial = (number) => {
  if (number === 1) return 1; // Base Case
  return number * factorial(number - 1);
};

console.log(factorial(5));

// How It Work
//  | 5 * factorial(5 - 1); //120
//  | 4 * factorial(4 - 1); //24
//  | 3 * factorial(3 - 1); //6
//  | 2 * factorial(2 - 1); //2
//  | 1;
// ⬇️

//Expected Output
// 120
