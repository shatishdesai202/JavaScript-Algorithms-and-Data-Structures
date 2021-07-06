const stringReverse = (str) => {
  let x = "";
  //   console.log(str.slice(1) + str[0]);
  if (str.length <= 1) return str;
  x += stringReverse(str.slice(1)) + str[0];
  return x;
};

const result = stringReverse("abc");

console.log(result);
