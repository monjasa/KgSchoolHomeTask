/*
 * Naive implementation using conditional statement with in operator:
 *
 * function extend(...objects) {
 *   const extendedObject = {};
 *   for (let i = 0; i < objects.length; i++) {
 *     const object = objects[i];
 *     if (typeof object !== 'object' || object === null) {
 *       continue;
 *     }
 *
 *     for (let key in object) {
 *       if (!(key in extendedObject)) {
 *         extendedObject[key] = object[key];
 *       }
 *     }
 *   }
 *
 *   return extendedObject;
 * }
 */

function extend(...objects) {
  return objects.reverse()
    .filter(object => typeof object === 'object' && object !== null)
    .reduce((extendedObject, object) => Object.assign(extendedObject, object));
}

console.log(extend({ a: 1, b: 2 }, { a: 3, d: 4 }));
