const linearSearch = (arr, value) => {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === value) return index;
  }
  return -1;
};

const result = linearSearch(
  [
    "python",
    "javascript",
    "c",
    "c++",
    "r",
    "rust",
    "java",
    "kotlin",
    "typescript",
    "go language",
    "dart",
  ],
  "dart"
);

console.log(result);
