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
