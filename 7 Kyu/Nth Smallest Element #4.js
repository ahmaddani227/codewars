// Nth Smallest Element (Array Series #4)
// Task
// Given an array/list of integers, find the Nth smallest element in the array.

// Notes
// Array/list size is at least 3.
// Array/list's numbers could be a mixture of positives , negatives and zeros.
// Repetition in array/list's numbers could occur, so don't remove duplications.

const nthSmallest = (arr, pos) => arr.slice().sort((a, b) => a - b)[pos - 1];
console.log(nthSmallest([5, 8, 12, 18, 22], 3));
console.log(nthSmallest([7, 1, 2, 3, 4], 2));
