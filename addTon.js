const addUpn = (n) => {
  return (n * (n + 1)) / 2;
};

var t0 = Date.now();
console.log(addUpn(3));
var t1 = Date.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
