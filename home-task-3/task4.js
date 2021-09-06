function flatten(array) {
  return array.reduce((flattenedArray, value) => {
    Array.isArray(value)
      ? flattenedArray.push(...flatten(value))
      : flattenedArray.push(value);
    return flattenedArray;
  }, []);
}

const array = [1, 3, 6, [11, 12], [15, [19, 23]]];
console.log(flatten(array));
