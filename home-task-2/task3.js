function deleteProperty(data, property) {
  const cloneData = { ...data };
  delete cloneData[property];
  return cloneData;
}

const data = { a: 1, b: 2 };

console.log(deleteProperty(data, 'b'));
