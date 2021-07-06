const isPalindrome = (str) => {
  if (str.length === 1) return "is Palindrome";
  if (str.length === 2)
    return str[0] === str[1] ? "is Palindrome" : "is Not Palindrome";
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return "is Not Palindrome";
};

console.log(isPalindrome("aba"));
