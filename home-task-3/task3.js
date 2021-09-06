function uniqueArray(array) {
  return [...new Set(array)].sort();
}

const array = [1, 3, 4, 2, 3, 1, 4, 5];
console.log(uniqueArray(array));
