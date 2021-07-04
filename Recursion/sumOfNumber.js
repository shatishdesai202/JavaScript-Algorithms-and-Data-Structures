const sumOfNumber = (number) => {
  if (number === 1) return 1; // Base Case  
  return number + sumOfNumber(number - 1);
};


console.log(sumOfNumber(3))

// How It Work

// return  3 +  sumOfNumber( 3 - 1)                           // -> 6
                // return  2 +  sumOfNumber( 2 - 1 )          // -> 3 
                                // return  1                  // -> 1


// Expected Output
// 6