const squareSum = (numbers) =>
  numbers.map((num) => num * num).reduce((acc, cur) => acc + cur);
