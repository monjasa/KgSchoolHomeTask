function reduce(node, accumulator) {
  let value = node.value;

  while (node.next) {
    node = node.next;
    value = accumulator(value, node.value);
  }

  return value;
}

function reduceRecursive(node, accumulator) {
  return node.next
    ? accumulator(node.value, reduceRecursive(node.next, accumulator))
    : node.value;
}

const linkedList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 5,
          next: null
        }
      }
    }
  }
}

console.log(reduce(linkedList, (previousValue, currentValue) => previousValue + currentValue));
console.log(reduceRecursive(linkedList, (previousValue, currentValue) => previousValue + currentValue));
