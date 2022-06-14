const nativeStringSearch = (str, val) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < val.length; j++) {
      if (val[j] !== str[i + j]) break;
      if (j === val.length - 1) count++;
    }
  }
  return count;
};

const result = nativeStringSearch("shatish desai", "desai");
console.log(result);

//if value existing return  1 otherwise 0


const naiveSearchWithWhileLoop = (long, short) => {

  let counterForLong = 0;
  let counterForShort = 0;
  let result = 0;

  while (counterForLong <= long.length - 1) {

    if (long[counterForLong] === short[counterForShort]) {
      counterForLong++
      counterForShort++

      if (counterForShort === short.length) {
        result++
        counterForShort = 0
      }

    } else {
      counterForLong++
    }

  }
  return result
}

console.log(naiveSearchWithWhileLoop("lozilolds lol!", 'lol'))