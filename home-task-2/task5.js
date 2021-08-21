/*
 * sayHi() is a function in "method" syntax, so *this* is equal to student object
 * and "Hello, John" is logged.
 *
 * sayBye() is an arrow-function, so *this* is inherited from outer scope - global scope
 * in this case (i.e. window object or document object), and global object does not contain
 * person property. Hence, "Goodbye, undefined" is logged.
 */

const user = {

  person: 'John',

  sayHi() {
    return `Hello, ${this.person}!`;
  },

  sayBye: () => {
    return `Goodbye, ${this.person}!`;
  }
};

console.log(user.sayHi());
console.log(user.sayBye());
