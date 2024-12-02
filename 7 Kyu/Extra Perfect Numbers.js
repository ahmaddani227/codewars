// Extra Perfect Numbers (Special Numbers Series #7)
function extraPerfect(n) {
  const number = Array.from({ length: n }, (_, i) => i + 1);
  return number.filter((n) => n % 2 == 1);
}

console.log(extraPerfect(10));
console.log(extraPerfect(100));
