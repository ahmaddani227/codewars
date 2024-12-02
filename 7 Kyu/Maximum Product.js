// Maximum Product
function adjacentElementsProduct(array) {
  return array
    .map((num, i) => num * array[i + 1])
    .slice(0, -1)
    .sort((a, b) => b - a)[0];
}
