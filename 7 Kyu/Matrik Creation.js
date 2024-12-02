// Matrix creation
// Create an identity matrix of the specified size ( >= 0 ).
function getMatrix(number) {
  return Array.from({ length: number }, (_, i) =>
    Array.from({ length: number }, (_, j) => (i === j ? 1 : 0))
  );
}

console.log(getMatrix(3));
console.log(getMatrix(5));
