// const validAnagram = (str1, str2) => {
//   if (str1.length !== str2.length) return false;

//   let freqCounter1 = {};
//   let freqCounter2 = {};

//   for (let val of str1) {
//     freqCounter1[val] = (freqCounter1[val] || 0) + 1;
//   }
//   for (let val of str2) {
//     freqCounter2[val] = (freqCounter2[val] || 0) + 1;
//   }
//   //   console.log(JSON.stringify(freqCounter1));
//   //   console.log(JSON.stringify(freqCounter2));
//   for (let key in freqCounter1) {
//     if (freqCounter1[key] !== freqCounter2[key]) {
//       return false;
//     }
//   }
//   return true;
// };

// refactored

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let storeValue = {};
  for (const key in str1) {
    let letter = str1[key];

    storeValue[letter] = (storeValue[letter] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    if (!storeValue[str2[i]]) {
      return false;
    } else {
      storeValue[str2[i]] -= 1;
    }
  }
  return true;
};

// console.log(isAnagram("abcd", "dcba")); // true
console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
