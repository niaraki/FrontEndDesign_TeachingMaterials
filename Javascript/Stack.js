// Implementation Details
const _stackArray = Symbol();

// Public Interface
// Export like ES6 format
export class Stack {
  constructor() {
    this[_stackArray] = [];
  }
  pop() {
    const value = this[_stackArray].pop();
    return value;
  }
  peek() {
    const items = this[_stackArray];
    const value = items[items.length - 1];
    return value;
  }
  push(value) {
    this[_stackArray].push(value);
  }
  get count() {
    return this[_stackArray].length;
  }
}
