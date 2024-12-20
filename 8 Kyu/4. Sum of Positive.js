const positiveSum = (arr) =>
  arr.filter((num) => num > 0).reduce((acc, cur) => acc + cur, 0);

console.log(positiveSum([1, 2, 3, 4, 5])); // 15
console.log(positiveSum([1, -2, 3, 4, 5])); // 13
console.log(positiveSum([])); // 0
