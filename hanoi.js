// given three stacks, starting from A, move all discs from A to C.
// Rules: Can only move one at a time.
// Cannot put a larger disc on top of a smaller one.

class Stack {
  constructor() {
    this.stack = [];
  }

  lastDisc() {
    return this.stack[this.size() - 1];
  }

  push(disc) {
    if (disc > this.lastDisc()) {
      throw new Error('operation not allowed');
    }

    if (!disc) {
      throw new Error('no size specified for disc');
    }
    this.stack.push(disc);
  }

  pop() {
    return this.stack.splice(this.size() - 1);
  }

  getStack() {
    return this.stack;
  }

  size() {
    return this.stack.length;
  }
}

// let's say on A we have 3,2,1

module.exports = function(a, b, c) {
  const A = new Stack();
  const B = new Stack();
  const C = new Stack();
  a.forEach(disc => A.push(disc));

  return [A.getStack(), B.getStack(), C.getStack()];
};
