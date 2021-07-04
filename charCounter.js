const charCounter = (str) => {
  let newArray = {};

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      if (newArray[str[i]]) {
        newArray[str[i]] += 1;
      } else {
        newArray[str[i]] = 1;
      }
    } else {
      if (newArray["space"]) {
        newArray["space"] += 1;
      } else {
        newArray["space"] = 1;
      }
    }
  }
  return newArray;
};

let output = charCounter("shatish d ");

console.log(output);
