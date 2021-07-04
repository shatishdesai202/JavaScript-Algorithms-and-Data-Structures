const power = (number, pwr) => {
  if (pwr === 1) return number;

  return number * power(number, pwr - 1);
};

console.log(power(2, 4));
// 2*2*2*2 = 16