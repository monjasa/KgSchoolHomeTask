function transformObject(object) {
  return Object.entries(object)
    .reduce((transformedObject, entry) => {
      transformedObject[entry[1]] = entry[0];
      return transformedObject;
    }, {});
}

const object = { name: "Object", length: 2 };
console.log(transformObject(object));
