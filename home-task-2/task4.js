/*
 * Object property value "Hello, Student" is logged, because *this* inside
 * a method is equal to an object. Hence, we access its property.
 */

const student = {

  greeting: 'Hello, Student!',

  getGreeting() {
    const greeting = 'Hello, Earth!';
    return this.greeting;
  }
}

console.log(student.getGreeting());
